'use client'

import React, { useEffect, useState } from 'react'
import { useAuth } from 'context/AuthContext'
import { Img as Image } from 'react-image'
import { toast } from 'react-toastify'
import { ToastDefaultOptions } from 'utils/toastOptions'
import illustrationImg from '../../../assets/images/changeNickname.png'
import styled from 'styled-components'
import { useUser } from 'context/UserContext'
import { Row } from 'reactstrap'

const FormGroup = styled.div`
  margin-bottom: 1rem;
`

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`

const calculateDaysUntilNextChange = (lastNicknameChange: Date) => {
  const sixMonthsLater = new Date(lastNicknameChange.getTime())
  sixMonthsLater.setMonth(sixMonthsLater.getMonth() + 6)

  const today = new Date()
  const timeDifference = sixMonthsLater.getTime() - today.getTime()
  const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24))

  return daysDifference > 0 ? daysDifference : 0
}


const Nickname: React.FC = () => {
  const { token } = useAuth()
  const { user, setUser } = useUser()
  const [btnDisabled, setBtnDisabled] = useState(false)
  const [canChangeIn, setCanChangeIn] = useState<number | null>(null)

  useEffect(() => {
    if (user && user.lastNicknameChange) {
      const daysRemaining = calculateDaysUntilNextChange(new Date(user.lastNicknameChange))
      setCanChangeIn(daysRemaining)
    }
  }, [user])
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('/api/users/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        const userData = await response.json()
        setUser(userData)
      } catch (error) {
        console.error('Erreur lors de la récupération des informations utilisateur:', error)
      }
    }

    fetchUser()
  }, [token])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (user) {
      setUser({
        ...user,
        [name]: value,
      })
    }
  }

  const handleNicknameChange = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!user) {
      toast.error('Utilisateur non trouvé', ToastDefaultOptions)
      return
    }

    try {
      const response = await fetch('/api/users/update-nickname', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ nickname: user!.nickname }),
      })

      if (response.ok) {
        const updatedUser = {
          ...user,
          nickname: user!.nickname,
          lastNicknameChange: new Date(),
        }
        setBtnDisabled(true)
        setUser(updatedUser)
        toast.success('Pseudo mis à jour avec succès !', ToastDefaultOptions)
      } else {
        const errorData = await response.json()
        toast.error(`Échec de la mise à jour du pseudo: ${errorData.error}`, ToastDefaultOptions)
      }
    } catch (error) {
      console.error('Erreur lors de la mise à jour du pseudo:', error)
      toast.error('Erreur lors de la mise à jour du pseudo', ToastDefaultOptions)
    }
  }

  // @ts-ignore
  // @ts-ignore
  return (
    <>
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="industries-img left-img">
            <Image src={illustrationImg} alt="Image" width={370} height={390} />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="industries-content">
            <h3>Changer votre nom d'utilisateur</h3>
            <p>
              Vous avez la possibilité de changer votre pseudo, cependant,
              veuillez noter que cette action est limitée à une fois tous les 6
              mois.
            </p>
            <p>
              Assurez-vous de choisir un pseudo qui vous convient,
              car vous ne pourrez pas le modifier à nouveau avant la fin de
              cette période.
            </p>

            <Row>
              <div className="col-lg-6 col-sm-6">
                <ul className="industries-item">
                  <li>
                    <i className="flaticon-checked"></i>
                    1 fois tous les 6 mois
                  </li>

                </ul>
              </div>

              {(canChangeIn && canChangeIn > 0) ? (
                <div className="col-lg-6 col-sm-6">
                  <ul className="industries-item">
                    <li>
                      <i style={{ color: 'red' }} className="flaticon-checked"></i>
                      Prochain changement disponible dans {canChangeIn} jours
                    </li>
                  </ul>
                </div>
              ) : ''}

            </Row>

            {(canChangeIn === 0 ) ? (
              <form onSubmit={ handleNicknameChange }>
                <FormGroup>
                  <Input
                    type="text"
                    name="nickname"
                    placeholder="Votre nouveau pseudo"
                    onChange={ handleInputChange }
                    required
                    disabled={ btnDisabled }
                  />
                </FormGroup>
                <div className="text-center">
                  <button className="default-btn" type="submit"
                    disabled={ btnDisabled }>
                  Mettre à jour
                  </button>
                </div>
              </form>
            ) : ''}
          </div>
        </div>
      </div>
    </>
  )
}

export default Nickname
