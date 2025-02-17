const Layout = ({ children }) => {
    const header = (
        <header>
            <div>
                <h1 className="text-gradient">CAFFIEND</h1>
                <p>For Coffeeheads</p>
            </div>
            <button>
                <p>Sign Up Free</p>
                <i className="fa-solid fa-mug-hot"></i>
            </button>
        </header>
    )

    const footer = (
        <footer>
            <p><span className="text-gradient">Caffiend</span> was made by <a href="https://davsan88.netlify.app/" target="_blank"> Davsan</a> using the <a href="https://www.fantacss.smoljames.com/" target="_blank"> FantaCSS</a> design library.
            </p>
        </footer>
    )

    return (
        <>
            {header}
            <main>
                {children}
            </main>
            {footer}
        </>
    )
}

export default Layout
