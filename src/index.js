import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '~/App'
import GlobalStyle from '~/globalStyle'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'tippy.js/dist/tippy.css' // optional for styling

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <GlobalStyle>
      <App />
    </GlobalStyle>
  </React.StrictMode>,
)
