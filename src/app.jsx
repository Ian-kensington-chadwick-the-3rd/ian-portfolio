import { Outlet } from 'react-router-dom'
import Nav from './components/navtabs'
import Footer from './pages/footer'

function App() {
    return (
        <>
            <Nav />
            <main >
           
            </main>
            <Outlet />
            <Footer/>
        </>
    )
}

export default App