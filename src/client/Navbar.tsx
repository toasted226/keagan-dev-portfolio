import "./Navbar.css";
import keag from "./assets/keag.jpg";

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="container">
                    <img src={keag}/>
                    <div className="title">
                        <div className="line"></div>
                        <div className="description">
                            <h1>Keagan Collins</h1>
                            <p>Software Developer</p>
                        </div>
                        <div className="line"></div>
                    </div>
                </div>
            </div>
            <div className="spacing"></div>
        </>
    )
}

export default Navbar;
