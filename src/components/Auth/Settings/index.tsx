'use client'

import React, { useState } from 'react'
import Nickname from './Nickname'
import Email from './Email'
import Password from './Password'
import Other from './Other'

const UserSettings: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('tab1')

  const openTabSection = (tabName: string) => {
    setActiveTab(tabName)
  }

  return (
    <div className="industries-area pb-100 mt-30">
      <div className="container">
        <div className="section-title">
          <h5>Mettez à jour les paramètres de votre compte tels que le pseudo, l'e-mail et le mot de passe.</h5>
        </div>

        <div className="tab industries-list-tab">
          <div className="row align-items-center">
            <div className="col-lg-3">
              <ul className="tabs">
                <li
                  className={activeTab === 'tab1' ? 'current' : ''}
                  onClick={() => openTabSection('tab1')}
                >
                  <span>
                    <i className="flaticon-user"></i>
                    <h3>Changer le pseudo</h3>
                    <p>Limite : 1 fois tous les 6 mois</p>
                  </span>
                </li>

                <li
                  className={activeTab === 'tab2' ? 'current' : ''}
                  onClick={() => openTabSection('tab2')}
                >
                  <span>
                    <i className="flaticon-envelope"></i>
                    <h3>Changer de mail</h3>
                    <p>Mettez à jour votre adresse e-mail</p>
                  </span>
                </li>

                <li
                  className={activeTab === 'tab3' ? 'current' : ''}
                  onClick={() => openTabSection('tab3')}
                >
                  <span>
                    <i className="fal fa-key"></i>
                    <h3>Changer le mot de passe</h3>
                    <p>Mettez à jour votre mot de passe</p>
                  </span>
                </li>

                <li
                  className={activeTab === 'tab4' ? 'current' : ''}
                  onClick={() => openTabSection('tab4')}
                >
                  <span>
                    <i className="fal fa-cogs"></i>
                    <h3>Autres paramètres</h3>
                    <p>Gérer les autres paramètres de votre compte.</p>
                  </span>
                </li>
              </ul>
            </div>

            <div className="col-lg-9">
              <div className="tab_content">
                {activeTab === 'tab1' && (
                  <div id="tab1" className="tabs_item active">
                    <Nickname />
                  </div>
                )}

                {activeTab === 'tab2' && (
                  <div id="tab2" className="tabs_item active">
                    <Email />
                  </div>
                )}

                {activeTab === 'tab3' && (
                  <div id="tab3" className="tabs_item active">
                    <Password /> {/* Replace with your component */}
                  </div>
                )}

                {activeTab === 'tab4' && (
                  <div id="tab4" className="tabs_item active">
                    <Other />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserSettings
