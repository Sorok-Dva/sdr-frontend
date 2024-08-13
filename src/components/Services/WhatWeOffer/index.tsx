'use client'

import React, { useState } from 'react'
import HeavyIndustry from './HeavyIndustry'
import Transportation from './Transportation'
import HealthCare from './HealthCare'
import Manufacturing from './Manufacturing'

const WhatWeOffer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('tab1')

  const openTabSection = (tabName: string) => {
    setActiveTab(tabName)
  }

  return (
    <div className="industries-area pb-100">
      <div className="container">
        <div className="section-title">
          <span>What We Offer</span>
          <h2>Industries We Serve</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            eos ea obcaecati et similique incidunt animi, sed, quos officiis
            placeat. Id ipsa molestias.
          </p>
        </div>

        <div className="tab industries-list-tab">
          <div className="row align-items-center">
            <div className="col-lg-3">
              {/* Tabs navs */}
              <ul className="tabs">
                <li
                  className={activeTab === 'tab1' ? 'current' : ''}
                  onClick={() => openTabSection('tab1')}
                >
                  <span>
                    <i className="flaticon-machine-learning"></i>
                    <h3>Heavy Industry</h3>
                    <p>All kind of industry</p>
                  </span>
                </li>

                <li
                  className={activeTab === 'tab2' ? 'current' : ''}
                  onClick={() => openTabSection('tab2')}
                >
                  <span>
                    <i className="flaticon-artificial-intelligence"></i>
                    <h3>Transportation</h3>
                    <p>All kind of industry</p>
                  </span>
                </li>

                <li
                  className={activeTab === 'tab3' ? 'current' : ''}
                  onClick={() => openTabSection('tab3')}
                >
                  <span>
                    <i className="flaticon-health"></i>
                    <h3>Health Care</h3>
                    <p>All kind of industry</p>
                  </span>
                </li>

                <li
                  className={activeTab === 'tab4' ? 'current' : ''}
                  onClick={() => openTabSection('tab4')}
                >
                  <span>
                    <i className="flaticon-automation"></i>
                    <h3>Manufacturing</h3>
                    <p>All kind of industry</p>
                  </span>
                </li>
              </ul>
            </div>

            <div className="col-lg-9">
              <div className="tab_content">
                {/* Tab item #1 */}
                <div
                  id="tab1"
                  className={`tabs_item ${activeTab === 'tab1' ? 'active' : ''}`}
                >
                  <HeavyIndustry />
                </div>

                {/* Tab item #2 */}
                <div
                  id="tab2"
                  className={`tabs_item ${activeTab === 'tab2' ? 'active' : ''}`}
                >
                  <Transportation />
                </div>

                {/* Tab item #3 */}
                <div
                  id="tab3"
                  className={`tabs_item ${activeTab === 'tab3' ? 'active' : ''}`}
                >
                  <HealthCare />
                </div>

                {/* Tab item #4 */}
                <div
                  id="tab4"
                  className={`tabs_item ${activeTab === 'tab4' ? 'active' : ''}`}
                >
                  <Manufacturing />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatWeOffer

