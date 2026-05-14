import { Outlet, Link } from "react-router-dom";

export default function MainLayout() {
    return (
        <>
            {/* This is the react-router-dom taking place */}
            <header>
                <nav className="navigation">
                    <Link to="/">Home</Link>
                    <Link to="/animations">Animations</Link>
                    <Link to="/websites">Websites</Link>
                    <Link to="/other">Other</Link>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>
        </>
    );
}