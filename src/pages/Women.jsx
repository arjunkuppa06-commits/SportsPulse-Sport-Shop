const womensArray = [
  {
    id:1,
    title:"Nike Women's Running leggings",
    description:"Lightweight and flexible running shoes designed for women athletes.",
    imgUrl:"https://m.media-amazon.com/images/I/71oYayKPl2L._AC_UF894,1000_QL80_.jpg",
  },
  {
    id:2,
    title:"Adidas Women's Training Leggings",
    description:"High-performance leggings crafted for comfort and flexibility during workouts.",
    imgUrl:"https://www.svpsports.ca/cdn/shop/files/adidas---Women_s-Optime-Training-Leggings-_H64213_-03.jpg?v=1738618370&width=2400",
  },
  {
    id:3,
    title:"Nike One Women’s Sports Bra",
    description:"Offers comfortable, supportive coverage for workouts and everyday activities.",
    imgUrl:"https://www.misterrunning.com/images/2025-media-12/ib9926-010-A.jpg",
  },

  {
    id:4,
    title:"Puma Women's Active Tank Top",
    description:"Stylish and comfortable tank top for women, perfect for active lifestyles.",
    imgUrl:"https://www.svpsports.ca/cdn/shop/files/Puma---Women_s-Active-Tank-_586854-01_2_1024x.jpg?v=1682617269",
  },
  {
    id:5,
    title:"New Balance Women's Sneakers",
    description:"Versatile sneakers designed for women with superior comfort and style.",
    imgUrl:"https://media-www.sportchek.ca/product/div-05-footwear/dpt-80-footwear/sdpt-02-womens/334450755/new-balance-women-s-530-sneakers-e715c7d8-dab9-481b-9028-06974d4aaa0f-jpgrendition.jpg",
  },
  {
    id:6,
    title:"Reebok Women's Training Shorts",
    description:"Breathable and lightweight shorts designed for women's training sessions.",
    imgUrl:"https://m.media-amazon.com/images/I/71ZUDzQbEeL._AC_UY1000_.jpg",
  },
]



function Women(){

function addToCart(itemName){
alert(itemName + " Successfully Added To Cart");
}




    return(
        <>
        
            <div class="container text-center my-3">
  
  <div class="row my-3">
    
    {
      womensArray.map(item =>(
        <div className="col-md-4 mb-3" key={item.id}>
          <div className="card">
            <img alt="" src={item.imgUrl} className="card-img-top" style={{
              height:"350px",
              objectFit:"cover",
   }}/>
<div className="card-body  text-center">
  <h5>{item.title}</h5>
  <p>{item.description}</p>

  <button className="btn btn-success" onClick={() =>addToCart(item.title)}>
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

export default Women