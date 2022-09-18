import { NavLink } from 'react-router-dom';

import './ButtonLink.scss';

interface Props {
    customClass?: string;
    text?: string;
    type?: string;
    target?: string;
    icon?: React.ReactNode;
    aria?: string;
    onClick?: () => void;
}


const Button: React.FC<Props> = ({customClass, text, type, target, icon, aria, onClick}) => {


    return (
        type === 'button' || type === 'submit' ? 
            <button type={type}
                className={customClass}
                onClick={onClick}
                aria-label={aria}
            >
                {text}{icon}
            </button>
            : 
            <NavLink to={target || '/'}
                className='btn'
            >
                {text}
            </NavLink>
    )
}

export default Button;