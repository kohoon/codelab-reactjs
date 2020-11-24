const NameComp = (props) => {
    
    return (
        <div>
            {
                props.name ?
                <h2>
                    {props.name}
                </h2> :
                <h2>
                    이름이 없습니다.
                </h2>
            }
        </div>
    )
};

export default NameComp;