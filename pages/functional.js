import { useState, useEffect } from 'react';
import Name from '../components/name';
import Job from '../components/job';

// state 기능 및 Lifecycle 기능 사용할 수 없었음
// Hook의 등장으로 클래스형 보다 간단하고, 메모리자원 적게 사용하면서 동일한 기능 구현 가능해짐
// 비구조화 할당 방식으로 props 사용 가능

const FunctionalComponent = (props) => {
    const [name, setName] = useState('홍길동');
    const [job, setJob] = useState('의적');
    // 설정한 state, setState

    const handleClickBtn = (val) => {
        // console.log(e.target);
        setName(val)
    };

    // Lifecycle과 관련된 Hook
    
    // useEffect( () => {
    //     console.log('component did mount');
    // }); // 사용하면 안됨. state 변화에 따라 항상 변화

    useEffect( () => {
        // 데이터 fetching
        // 분기 처리
        // 초기 스테이트 처리
        console.log('component did mount');
    }, []);

    useEffect( () => {
        console.log('component did update');
    }, [name, job]);

    return (
        <div>
            <h1>함수형 컴포넌트</h1>
            <Name
                name={name}
                onClickCB={handleClickBtn}
            />
            <button onClick={() => handleClickBtn('김개똥')}>변경</button>
            <Job
                job={job}
                onClickCB={handleClickBtn}
            />
            <button onClick={() => handleClickBtn('경찰')}>변경</button>
            {/* val을 받아오기 위해서 onClick={handleClickBtn} 이 아닌 onClick={() => handleClickBtn(val)}로 사용*/}
        </div>
    )
}

export default FunctionalComponent;