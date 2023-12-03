import { Outlet } from 'react-router-dom'
import Nav from './components/navtabs'

function App() {
    return (
        <>
        <Nav/>
        <main >

        </main>
        <Outlet/>
        </>
    )
}

export default App