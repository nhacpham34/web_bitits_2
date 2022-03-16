import ProductItem from './productItem'
import ProductFile from './products.json'   

function Product(props) {
    return (  
    <div className="grid container__product grid_contain">
        {/* hiển thị tất cả sản phẩm có id === "filter" */}
        {ProductFile.map(prd => {
            if(prd.id === props.filter)
            { 
                    return(
                    // 
                    <ProductItem key = {prd.id2}  prd={prd} />
                )
            }
        })} 
    </div>
    );
}
export default Product;
