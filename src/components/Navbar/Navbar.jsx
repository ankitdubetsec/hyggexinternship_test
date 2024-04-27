import './Navbar.css'

import { Link } from 'react-scroll'
import image from '../../img/image.png'
function Navbar(props) {

    return (
        <div className="n-wrapper" id='Navbar'>
         <div className="n-left">
            <div className="n-name">
                <img src={image} className='lg' style={{
      width: '191px',
      height: '39px',
      top: '32px',
      left: '104px',
      gap: '0px',
      opacity: '0px'
    }}></img>
            </div>
           
         </div>
         <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType:'none',marginTop:"10px",marginRight:"25px"}}>
                   <li className='ll'>Home</li>
                    <li className='ll'>Flashcard</li>
                    <li className='ll'>Contact</li>
                    <li className='ll'>FAQ</li>
                    
                    
        
                </ul>
            </div>
            <Link spy={true} to="Contacts" > <button className="button n-button">Login</button></Link>
         </div>
        </div>
    )
}

export default Navbar