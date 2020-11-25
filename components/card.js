const CardComp = ({ data, onClickCB }) => {
    return (
        <div>
             <div className="card" onClick={() => onClickCB(data.cardIdx)}>
                <div className="name">
                    이름 : {data.name}
                </div>
                <div className="job">
                    직업 : {data.job}
                </div>
            </div> 
        </div>
    )
}

export default CardComp;