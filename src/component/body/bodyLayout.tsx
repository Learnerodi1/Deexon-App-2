import { Outlet } from "react-router-dom"
import { Header } from "./header"
import { Footer } from "./footer"

export const BodyLayout = () => {
    return (
        <>
            <Header />
            <main className="ml-64 max-[1000px]:ml-0 pt-24 pb-12 px-8 min-h-screen max-[1000px]:px-4">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}