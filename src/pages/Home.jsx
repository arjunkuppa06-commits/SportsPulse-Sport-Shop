function Home(){
    return(
        <>
        <header className="bg-dark text-light p-1 text-center">
            <h1>SportPulse</h1>
                    </header>
            <div className="container my-2">
                <div className="card text-bg-dark">
  <img src="https://en.reformsports.com/oxegrebi/2025/10/basketbol-potadan-gecen-top.webp" className="card-img" alt="A BasketBall Image" />
  <div className="card-img-overlay d-flex justify-content-center align-items-center">
    <div className="bg-secondary p-4 rounded-2 bg-opacity-50">
    <h2 className="card-title">Welcome to SportsPulse</h2>
    <p className="card-text">Your Ultimate Destination for the Latest Sports Gear, News, Analysis, and insights</p>
    </div>
  </div>
</div>

<h3 className="text-center mt-5 mb-4">Featured Products</h3>
<div className="row my-3">

<div className="col-md-3">
    <img src="https://cdn-images.farfetch-contents.com/31/76/83/66/31768366_61211997_600.jpg" 
    alt="image" className="img-fluid" height="300" width="350"/>
    <h5>Nike Air Zoom Pegasus</h5>
<p>A versatile and comfortable running shoe with responsive cushioning.</p>
<button className="btn btn-success">Add to Cart</button>
  </div>

<div class="col-md-3">
    <img src="https://assets.adidas.com/images/w_500,f_auto,q_auto/be7b0633f22744debd2abe8de10dcf53_9366/Predator_Elite_Firm_Ground_Soccer_Cleats_Red_JS0433_HM1.jpg" 
    alt="image" className="img-fluid"/>
    <h5>Adidas Predator Soccer Cleats</h5>
<p>High-performance soccer cleats designed for precision and control.</p>
<button className="btn btn-success">Add to Cart</button>
  </div>

  <div class="col-md-3">
    <img src="https://m.media-amazon.com/images/I/819hY6qLC0L.jpg" alt="image" className="img-fluid" height="400"/>
    <h5>Wilson Evolution Basketball</h5>
<p>Official size 6 basketball with exceptional grip and durability.</p>
<button className="btn btn-success">Add to Cart</button>
  </div>

<div class="col-md-3">
    <img src="https://underarmour.scene7.com/is/image/Underarmour/PS1361518-001_HF?rp=standard-0pad%7Cpdp&qlt=85&bgc=f0f0f0&wid=800&hei=1000&op_usm=1.75%2C0.3%2C2%2C0" alt="image" className="img-fluid" height="400"/>
    <h5>Under Armour HeatGear T-Shirt</h5>
<p>Lightweight and breathable t-shirt for maximum comfort during workouts.</p>
<button className="btn btn-success">Add to Cart</button>
  </div>

</div>
            </div>
        </>
    )
}

export default Home