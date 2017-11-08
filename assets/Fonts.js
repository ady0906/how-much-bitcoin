const FontFaceObserver = require('fontfaceobserver')

const Fonts = () => (
    const link = document.createElement('link')
    link.href = 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900'
    link.rel = 'stylesheet'

    document.head.appendChild(link)
    
)

export default Fonts
