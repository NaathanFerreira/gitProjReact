import React from 'react'
import { FaReact } from 'react-icons/fa'

import './footer.css'

const portfolio = "https://nathan-ferreira-portfolio.netlify.app"

export default props => (
    <footer className="footer">
        <span> Desenvolvido com <FaReact /> por <strong><a href={portfolio} target="_blank">Nathan</a></strong></span> 
    </footer>
)