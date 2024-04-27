


import Tabb from "../tabs/Tabb";
import Car from "../../carousel/ImageCarousel";
import './Intro.css'
import logo2 from '../../img/logo2.png'

import Path from "./Path";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';


function Intro(){
    const transition={duration:2,type:'spring'}
    const path = ['Home', 'Maths', 'Relations and Functions'];
    return(
 <div className="intro" style={{marginTop:"50px"}}>
  
    <div className="i-left">
        <div className="i-name">
            <span style={{ position: 'absolute',
      width: '676px',
      height: '39px',
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: '32px',
      lineHeight: '39px',
      background: 'linear-gradient(180deg, #06286E 0%, #164EC0 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      textFillColor: 'transparent'
}}>Relations and Functions ( Mathematics )</span>
     <Tabb/>
    
        </div>
       
      
       
    </div>
    
 </div>
    )
}
export default Intro