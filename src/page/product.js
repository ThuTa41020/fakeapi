import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Product = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({});
    const {title, price, category, description, image} = product;
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=>setProduct(json))
    })

    return (
        <div className="product">
            <div className="contact">
                <h3>{title}</h3>
                <h5>Price - $ {price}</h5>
                <h5>Category - {category}</h5>
                <p>{description}</p>
                <hr />
                <button onClick={() => navigate("/")} className="btn">Go Back</button>
            </div>
            <div><img src={image} alt="" srcset="" className="image" /></div>
        </div>

    );
};
export default Product;