
function ProductItem (props) {
    return (
        <div key={props.prd.id2} className="product__item ">
            <div className="product__image">
                <img src={props.prd.imgLink} width="350px" alt="" />
            </div>
            <div className="product__box">
                <span className="product__size">{props.prd.ProductType}({props.prd.ProductSize})</span>
                <h3 className="product__box-title">
                    {props.prd.ProductName}
                </h3>
                <p className="product__price">{props.prd.Price} đ</p>
                <button className="product__buy">Thêm vào giỏ</button>
            </div>
        </div>
    )
}
export default ProductItem;