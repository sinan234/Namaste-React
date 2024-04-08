import { LOGO_URL } from "../utils/constants";

const  HeaderComponent=()=>(
    <div className='header'>
        <div className='logo-container'> 
          <img id='logo' src={LOGO_URL} />
        </div>
        <div className='nav-items'>
            <ul >
                <li id='lg'>Home</li>
                <li id='lg' >About</li>
                <li id='lg'>Cart</li>
                <li id='lg'>Contact</li>
            </ul>
        </div>
    </div>
)

export default HeaderComponent;