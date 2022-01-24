import Head from "next/head"
import Contact from "../components/Contact"

const Layout = ({ children, title }) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossorigin
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap"
                rel="stylesheet"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap"
                rel="stylesheet"
            />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
        </Head>
        {children}
        <footer>
            <Contact />
        </footer>
    </div>
)

export default Layout
