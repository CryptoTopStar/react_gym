const Model = ({open, local_datas, setSelectedRow, modalClose}) =>{
const modalClick =  (index) => () => {
    modalClose();
    setSelectedRow(index);
}
    return(
        open?
        <div className="model">
            <p className="model_title">Select another plan</p>
            <p className="model_content" >Pay one subscription and visit different gyms. Use our app as a ticket to the gyms</p>
            <div className="flex flex-row justify-around card_pan" >
                {
                    local_datas.map(({cost, title, img , list, name }, index) => (
                        <div key={index} className="card" >
                            <p className="cost">
                                {cost}
                                <span className="usd">$</span>
                                <span>/month</span>
                            </p>
                            <p className="card_name" style={{ backgroundImage:img}}>{name}</p>
                            <div className="list_div" >
                                {
                                    list.map( (item) => (
                                        <p className="flex flex-row">
                                        <img src="./check_green.svg"/>{item}
                                        </p>
                                    ))
                                }
                            </div>
                            <center><button className="select_plan" onClick={modalClick(index)}>SELECT PLAN</button></center>
                            <center><button className="discover_gym">
                            DISCOVER RELATED GYMS
                            </button></center>
                        </div>

                    ))
                }

            </div>
               

        </div>: <></>
    )
    }
export default Model