import { Link, useLocation } from 'react-router-dom';

function navtabs() {

    const currentPage = useLocation().pathname;

    return (
        <ul className='nav nav-tabs nav-fill justify-content-end'>
            <li className='nav-item'>
                <Link
                    to='/'
                    className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>
                    About me
                </Link>
            </li>
            <li className='nav-item'>
                <Link
                    to='/Portfolio'
                    className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}>
                    Portfolio
                </Link>
            </li>
            <li className='nav-item'>
                <Link
                    to='/Contact'
                    className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}>
                    Contact
                </Link>
            </li>
        </ul>
    )
}

export default navtabs