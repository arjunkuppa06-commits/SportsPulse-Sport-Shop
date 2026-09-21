function About(){
    return(
        <>
        <header className="bg-dark text-light p-1 text-center">
            <h1>SportPulse</h1>
        </header>
             <div  className="d-flex flex-column justify-content-center align-items-center shadow p-2 my-3">
                <h2 className="text-success mt-3">Welcome To SportsPulse</h2>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpW0L4tIk5prUIlOJ03DYA6YT5Se05IQ7ToZvoc25_ecPOk8z9NiSlgFk&s=10" 
                alt="image" className="img-fluid shadow-mg rounded-3"/>
             </div>

             <div className="p-2 my-3 shadow text-center">
<h2>About SportsPulse</h2>
<p><i>Welcome to SportPulse, your ultimate destination for the latest sports 
    news, analysis, and <br/> insights. We are dedicated to bringing you the most 
    comprehensive coverage of all things <br/> sports, from major league games to 
    grassroots events.</i></p>
<p><b>Our team of passionate sports enthusiasts and expert analysts work around 
    the clock <br/> to provide you with up-to-date information, in-depth articles, and 
    exclusive interviews <br/> with top athletes. Whether you're a die-hard fan or just 
    looking to stay informed, <br/> SportPulse has something for everyone.</b></p>
<p><u>Join our community and stay connected with the pulse of the sports world!</u></p>
             </div>
        </>
    )
}

export default About 