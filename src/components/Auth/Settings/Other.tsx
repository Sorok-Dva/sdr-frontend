'use client'

import React from 'react'
import { Img as Image } from 'react-image'

import illustrationImg from '../../../assets/images/Settings.png'

const Other: React.FC = () => {
  return (
    <>
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="industries-content">
            <h3>Autres paramètres du compte</h3>
            <p>
              Sur cette page vous trouverez tous les autres paramètres liés à votre compte comme demander une suppression.
            </p>
            <p>
              En cours de construction !
            </p>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="industries-img right-img">
            <Image src={illustrationImg} alt="Image" width={526} height={445} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Other
