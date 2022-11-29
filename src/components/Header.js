import {moneyFormat} from "./helpers"

function Header ({total, money}) { 
    return(
        <>
            {total > 0 && money - total !==0 && (
                <div className="header">Останаха {moneyFormat(money) - total}лв</div>
            )}
            {total === 0 &&(
                <div className="header">Разполагате с {moneyFormat(money)}лв</div>
            )}
            {money - total === 0  && (
                <div className="header">No money</div>
            )}
        </>
    )
}

export default Header