import logopng from "../../svg/Logo GetSilly.png"

function Header() {
    
    const descLogo = "está é a logo do blog"
    
    return (
        <>
            <header className="flex-space-between">
                <div className="logo">
                    <img src={logopng} alt={descLogo} />
                </div>
                <div className="search">
                    <input type="text" name="search" className="input-search"/>
                </div>
                <div>
                    <ul className="menu">
                        <li>
                            <a href="#" className="nav-link">Categorias</a>
                        </li>
                        <li>
                            <a href="#" className="nav-link">Sobre</a>
                        </li>
                        <li>
                            <a href="#" className="nav-link">Contato</a>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
}
export default Header