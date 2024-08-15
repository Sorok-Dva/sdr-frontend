import React from 'react'
import { Helmet } from 'react-helmet'

const GoogleTagManager : React.FC = () => (
  <Helmet>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-XF268T88NJ"></script>
    <script>
      { `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-XF268T88NJ');
      ` }
    </script>
  </Helmet>
)

export default GoogleTagManager
