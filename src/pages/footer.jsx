import imggit from './assets/githublogo.png'
import imglnkd from './assets/linkedin.png'
import imgstck from './assets/stackoverflowlogo.png'

const style ={
    iconContainer:{
        width:'50px',
        height:'50px',
        margin:'10px'
        
    },
    horizontalList: {
        listStyleType: 'none',
        display: 'flex', 
        justifyContent: 'center',
        padding: 10, 
        posititon: 'fixed'
    },
    

}

export default function Footer() {

    return (
        <footer>
            <ul style={style.horizontalList}>
                <li>
                    <a href='https://github.com/Ian-kensington-chadwick-the-3rd'>
                        <img style={style.iconContainer} src={imggit} className='icon'></img>
                    </a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/ian-sills-668497291/'>
                        <img style={style.iconContainer} src={imglnkd} className='icon' ></img>
                    </a>
                </li>
                <li>
                    <a href='https://stackoverflow.com/users/22555275/ian'>
                        <img style={style.iconContainer} className='icon' src={imgstck}></img>
                    </a>
                </li>
            </ul>
        </footer>
    )
}