import BasketItem from "./BasketItem"
import {moneyFormat} from "./helpers"
function Basket ({basket, products, total, resetBascet}) {
    return (
        <>
            <div className="basket-container container">
                <h3>Description</h3>
                <ul>
					{basket.map(item => (
						<BasketItem key={item.id} item={item} product={products.find(p => p.id === item.id)}/>
					))}
				</ul>
				<div className="total">
					Total: {moneyFormat(total)}лв
				</div>
				<button className="basket-reset-btn" onClick={resetBascet}>Reset</button>
			</div>
        </>
    )
}

export default Basket