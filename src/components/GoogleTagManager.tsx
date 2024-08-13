import React from 'react'
import { Helmet } from 'react-helmet'

const GoogleTagManager : React.FC = () => (
  <Helmet>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-BS9JTT28QP"></script>
    <script>
      { `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-BS9JTT28QP');
      ` }
    </script>
  </Helmet>
)

export default GoogleTagManager
