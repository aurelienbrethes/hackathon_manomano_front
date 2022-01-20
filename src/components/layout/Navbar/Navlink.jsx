import { Link } from 'react-router-dom';

const Navlink = ({path, label, logo, alt}) => {

    return(
        <li className='navlink'>
                <Link className='navlink__link' to={path}>
                    <img className='navlink__link-logo' src={logo} alt={alt} />
                    {label}
                </Link>
        </li>
    )
}

export default Navlink;