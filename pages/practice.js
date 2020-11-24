import { useState } from 'react';
import Name from '../components/name';
import Job from '../components/job';

const FunctionName = () => {
    const [ userName, setUserName ] = useState('');
    const [ userJob, setUserJob ] = useState('');

    const handleClickBtn = () => {
        setUserName('홍길동');
        setUserJob('의적');
    }

    return (
        <>
            <Name
                name={userName}
            />
            <Job
                job={userJob}
            />
            <button onClick={handleClickBtn}>변경</button>
        </>
    )
};
export default FunctionName;