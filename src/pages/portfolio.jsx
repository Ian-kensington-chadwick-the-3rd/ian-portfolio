import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import 

export default function portfolio() {
    return (
        <>
            <div className='title '>
                <h1>Portfolio Page</h1>
            </div>
            <div className='row'>
                <div className='col-5 backgroundImage1'>
                    <a href='https://github.com/dee-here/space-jam-x'><FontAwesomeIcon className='giticon' icon={faGithub}/></a> 
                    <a className='text' href='https://dee-here.github.io/space-jam-x/'>Space-Jam-X </a> 
                </div>
                <div className='col-5 backgroundImage2'>
                <a href='https://github.com/Antedbell20/darwnism'><FontAwesomeIcon className='giticon' icon={faGithub}/></a> 
                    <a className='text' href='https://darwnism-d5883c9cdeb6.herokuapp.com/'>Darwinism</a>
                </div >
                <div className='col-5 backgroundImage3'>
                <a href='https://github.com/Ian-kensington-chadwick-the-3rd/text-editor-'><FontAwesomeIcon className='giticon' icon={faGithub}/></a> 
                    <a className='text' href='https://shielded-shelf-24701-a7bfe233d346.herokuapp.com/'>Jate text editor</a>
                </div>
                <div className='col-5 backgroundImage4'>
                    <a href='https://github.com/Ian-kensington-chadwick-the-3rd/home-work-api'><FontAwesomeIcon className='giticon' icon={faGithub}/></a> 
                    <a className='text' href='https://ian-kensington-chadwick-the-3rd.github.io/home-work-api/'>Weather Dashboard</a>
                </div>
                <div className='col-5 backgroundImage5'>
                    <a href='https://github.com/Ian-kensington-chadwick-the-3rd/logo-generator'><FontAwesomeIcon className='giticon' icon={faGithub}/></a> 
                    <a className='text' href='https://github.com/Ian-kensington-chadwick-the-3rd/logo-generator'>Logo Generator</a>
                </div>
                <div className='col-5 backgroundImage6'>
                    <a href='https://github.com/Ian-kensington-chadwick-the-3rd/Note-maker'><FontAwesomeIcon className='giticon' icon={faGithub}/></a> 
                    <a className='text' href='https://floating-waters-15694-352739f74a95.herokuapp.com/notes'>Note Taker</a>
                </div>
            </div>
        </>
    )
}