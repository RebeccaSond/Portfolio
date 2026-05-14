export default function Home() {
    return (
        <section className="home">
            <div className="homeContent">
                <div className="homeText">
                    <h1>Welcome</h1>
                    <p>
                        Welcome to my site. Explore projects, websites, and
                        creative work over the years.
                    </p>

                    <button className="homeBtn">
                        Learn More
                    </button>
                </div>

                <div className="homeImageContainer">
                    <img
                        className="homePageImg"
                        src="./gallery/images/becca.jpg"
                        alt="Home"
                    />
                </div>
            </div>
        </section>
    );
}