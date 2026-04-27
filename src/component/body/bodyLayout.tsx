import { Outlet } from "react-router-dom"
import { Header } from "./header"
import { Footer } from "./footer"
import clsx from "clsx"
import { UseTheme } from "../context/useTheme"

export const BodyLayout = () => {
    const context = UseTheme()
    return (
        <>
            <Header />
            <main className={clsx("bg-secondary min-h-screen ", `${!context?.theme ? "dark": "light"}`)}>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}