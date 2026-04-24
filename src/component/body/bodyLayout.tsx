import { Outlet } from "react-router-dom"
import { Header } from "./header"
import { Footer } from "./footer"

export const BodyLayout = () => {
    return (
        <>
            <Header />
            <main className="bg-black min-h-screen ">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}