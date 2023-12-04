import '../style/app.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faLaptopCode, faCubes } from '@fortawesome/free-solid-svg-icons'



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
    alignItems: 'center',
    paddingTop: '40px'
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
    posititon: 'fixed'
},
codeList:{
    listStyleType: 'none',
    display: 'flex', 
    justifyContent: 'space-between',
    padding: 10, 
    margin: 100,
    backgroundColor: 'grey',
    paddingLeft: '300px',
    paddingRight: '300px',
    flexWrap: 'wrap'
},
codeSize:{
    height: '100px',
    width: '300px'
},
ulContainer:{
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'center',
    marginRight: '27px',
    flexWrap: 'wrap'
},
underBorder:{
    borderBottom: "2px solid white",
    width: '150px'
}
}
// style={style.phontSize}

export default function Aboutme() {
    return (
        <>
            <div className='text-center'  style={style.homeContainer}>
                <h1>About me</h1>
                <img style={style.imageContainer} src={imgpfp}></img>
                <p style={style.phontSize}>
                Welcome my name is Ian Sills and I love to code I just graduated at UC berkley. I am a full stack-web developer that resides in navarre Florida I am currently looking for imployment as a web developer.
                </p>
            </div>
            <div style={style.codeList}>
                <div>
                    <FontAwesomeIcon style={style.codeSize} icon={faCode}/>
                    <ul style={style.ulContainer}>
                        <li>
                            <h1 >languages</h1>
                            <h3>
                                Javascript
                            </h3>
                            <h3>
                                Html
                            </h3>
                            <h3>
                                Css
                            </h3>
                            <h3>
                                jQuery
                            </h3>
                            <h3>
                                SQL
                            </h3>
                        </li>
                    </ul>
                </div>
                <div> 
                       
                        <FontAwesomeIcon style={style.codeSize} icon={faLaptopCode}/>
                        
                       
                    <ul style={style.ulContainer}>
                        <li>
                            <h1 >Frameworks</h1>
                            <h3>
                                ReactJS
                            </h3>
                            <h3>
                                ExpressJS
                            </h3>
                            <h3>
                                NodeJS
                            </h3>
                            <h3>
                                Bootstrap
                            </h3>
                        </li>
                    </ul>
                </div>
                <div>
                    <FontAwesomeIcon style={style.codeSize} icon={faCubes}/>
                    <ul style={style.ulContainer}>
                        <li>
                            <h1 >Other</h1>
                            <h3>
                                Git
                            </h3>
                            <h3>
                                MongoDb
                            </h3>
                            <h3>
                                GraphQL
                            </h3>
                            <h3>
                                Heroku
                            </h3>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <div className=''>
                    <button>Contact Me</button>
                </div>
            </div>
            <footer>
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
            </footer>
        </>
    );
}