import { Outlet } from "react-router-dom"
import Notice from "../components/Notice/Notice"
import Footer from "../components/Footer/Footer"

// defining layout for whole app 
const Layout = () => {
    return (
        <>
            <Notice />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout;