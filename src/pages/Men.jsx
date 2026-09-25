const mensArray = [
  {
    id:1,
    title:"Nike Men's Running Shoes",
    description:"Versatile and durable running shoes designed for men athletes.",
    imgUrl:"https://hips.hearstapps.com/hmg-prod/images/nike-running-shoes-2026-697a314bbc7a3.jpg?crop=0.668xw:1.00xh;0.332xw,0&resize=640:*",
  },
  {
    id:2,
    title:"Adidas Men's Training Shorts",
    description:"Comfortable and stylish shorts for men, ideal for training sessions.",
    imgUrl:"https://fglprdcdn.azureedge.net/images/299398-na-1-Large.jpg",
  },
  {
    id:3,
    title:"Under Armour Men's Hoodie",
    description:"Warm and breathable hoodie for men, perfect for outdoor activities.",
    imgUrl:"https://www.svpsports.ca/cdn/shop/files/UnderArmour-Men_sRivalFleeceHoodie_1379757410_1.jpg?v=1781021623&width=2400",
  },

  {
    id:4,
    title:"Puma Men's Soccer Jersey",
    description:"A comfortable Puma jersey for sports and everyday wear.",
    imgUrl:"https://www.sourceforsports.ca/cdn/shop/products/64b6a76b2cbc38ed3ad7212f13368eaa.jpg?crop=center&height=460&v=1679414177&width=460",
  },
  {
    id:5,
    title:"New Balance Men's Sneakers",
    description:"Classic sneakers with modern features for comfort and style.",
    imgUrl:"https://www.newbalance.ca/dw/image/v2/AAGI_PRD/on/demandware.static/-/Library-Sites-NBUS-NBCA/default/dw421f1760/images/page-designer/2026/August/NB-12307_HCB_SideBySide_Mobile_WS327FE_WS327BL_WS327NKD_Off_Model.jpg?sw=991&sfrm=jpg",
  },
  {
    id:6,
    title:"Reebok Men's Training T-Shirt",
    description:"Breathable and lightweight t-shirt designed for men's training sessions.",
    imgUrl:"https://digital.loblaws.ca/JF/F6MR075348010_EA/en/17/f6mr075348_bright_blue_lay_down_forward-facing_250.jpeg",
  },
]



function Men(){
    return(
        <>
        
            <div class="container text-center my-3">
  
  <div class="row my-3">
    
    {
      mensArray.map(item =>(
        <div className="col-md-4 mb-3" key={item.id}>
          <div className="card">
            <img alt="" src={item.imgUrl} className="card-img-top" style={{
              height:"330px",
              objectFit:"cover",
   }}/>
<div className="card-body  text-center">
  <h5>{item.title}</h5>
  <p>{item.description}</p>

  <button className="btn btn-success">
    <i className="bi bi-cart-plus-fill">
    </i> Add to Cart 
  <i className="bi bi-cart-plus-fill"></i></button>
</div>
          </div>
        </div>

      ))
    }

    
  </div>
</div>
        </>
    )
}

export default Men