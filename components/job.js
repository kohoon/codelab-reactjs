const JobComp = (props) => {
    
    return (
        <div>
        {
            props.job ?
            <h2>
                {props.job}
            </h2> :
            <h2>
                직업이 없습니다.
            </h2>
        }
    </div>
    )
};

export default JobComp;