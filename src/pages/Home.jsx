import '../style/app.css'
import imgpfp from './assets/ianpfp.jpg'
import imggit from './assets/githublogo.png'
import imglnkd from './assets/linkedin.png'
import imgstck from './assets/stackoverflowlogo.png'

const style = {
phontSize:{
    fontSize: '20px',
    width: '450px',
    padding: '10px',
    wordWrap: 'break-word',
},
homeContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
},
imageContainer:{
    borderRadius:'50%',
    width: '400px',
    height: '400px',
    overflow: 'hidden'
},
iconContainer:{
    width:'50px',
    height:'50px',
    margin: '200px 10px', 
},
horizontalList: {
    listStyleType: 'none',
    display: 'flex', 
    justifyContent: 'center',
    padding: 10, 
},
listItem: {
    margin: '0 10px', 
},

}
// style={style.phontSize}

export default function Aboutme() {
    return (
        <>
            <div className='text-center'  style={style.homeContainer}>
                <h1>About me</h1>
                <img style={style.imageContainer} src={imgpfp}></img>
                <p style={style.phontSize}>
                Hello my name is Ian and I love to code I just graduated at UC berkley
                </p>
            </div>
            <div>
                <ul style={style.horizontalList}>
                    <li>
                        <a href='https://github.com/Ian-kensington-chadwick-the-3rd'>
                        <img style={style.iconContainer} src={imggit}></img>
                        </a>
                    </li>
                    <li>
                    <a href='https://www.linkedin.com/in/ian-sills-668497291/'>
                        <img style={style.iconContainer} src={imglnkd} ></img>
                    </a>
                    </li>
                    <li>
                        <a href='https://stackoverflow.com/users/22555275/ian'>
                        <img style={style.iconContainer} src={imgstck}></img>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}