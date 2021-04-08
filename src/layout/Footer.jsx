import React from 'react'
import { AiFillHeart } from 'react-icons/ai'

import './footer.css'

const portfolio = "https://nathan-ferreira-portfolio.netlify.app"

export default props => (
    <footer className="footer">
        <span> Desenvolvidor com <AiFillHeart /> por <strong><a href={portfolio} target="_blank">Nathan</a></strong></span> 
    </footer>
)