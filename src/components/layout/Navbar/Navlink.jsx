import React from 'react';
import { Link } from 'react-router-dom';

const Navlink = ({path, label, img, alt}) => {
    return(
        <div>
            <Link className='hover:text-white' to={path}>
                {label}
                <img src={img} alt={alt} />
            </Link>
        </div>
    )
}

export default Navlink;