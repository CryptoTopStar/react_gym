
const GymCard = ({selectedRow}) =>{
    return(
        <div className="gymcard" >
            <p className="gymcard_title">
               { selectedRow.cost}
                <span className="price">$</span>
                <span>/month</span>
            </p>
            <p className="name" style={{backgroundImage:selectedRow.img}}>{selectedRow.name}</p>
            <div className="itempan">
                                {
                                    selectedRow.list.map( (item) => (
                                        <p className="flex flex-row item">
                                        <img className="green_checkbox" src="./check_green.svg"/>{item}
                                        </p>
                                    ))
                                }
                            </div>
            <button className="cardButton">
            DISCOVER RELATED GYMS
            </button>

        </div>
    )

}
export default GymCard