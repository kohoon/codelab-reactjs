import { useState, useEffect } from 'react';
import Card from '../components/card';

const CardListPage = () => {
    const [ inputVal, setInputVal ] = useState({
        name : "",
        job : "",
    });
    const [ cardList, setCardList ] = useState([
        { cardIdx: 1, name: '홍길동', job: '의적'},
        { cardIdx: 2, name: '김철수', job: '선생님'},
        { cardIdx: 3, name: '강윤구', job: '변호사'},
        { cardIdx: 4, name: '송영욱', job: '기술자'},
    ]);

    const [ selectedCard, setSelectedCard ] = useState();

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setInputVal({
            ...inputVal,
            [name] : value
        });
            
    };

    const handleClickCard = (idx) => {
        setSelectedCard(idx)
    }

    const handleUpdateCard = () => {
        if (selectedCard === undefined) { return alert('카드를 선택하세요')};
        if (!inputVal) { return alert('값을 입력하세요')};
        setCardList(
            cardList.map( item => 
                item.cardIdx == selectedCard ?
                {
                    ...item,
                    job : inputVal
                }
                : item
            )
        );
    }

    useEffect( () => {
        console.log(selectedCard);
    }, [selectedCard])

    return (
        <section className="card-list-container">
            <div className="card-list-container wrapper">
                <div>
                    <input
                        className="search-input"
                        type="text"
                        value={inputVal.name}
                        name="name"
                        onChange={handleChangeInput}
                        placeholder="이름"
                    />
                    <input
                        className="search-input"
                        type="text"
                        value={inputVal.job}
                        name="job"
                        onChange={handleChangeInput}
                        placeholder="직업"
                    />
                    <button className="btn-black" onClick={handleUpdateCard}>수정</button>
                </div>
                {
                cardList
                // .filter((item) => item.name === inputVal)
                .map((item, index) => (
                    <Card
                        key={index}
                        data={item}
                        onClickCB={handleClickCard}
                    />
                ))
                }
            </div>
        </section>
    )
}

export default CardListPage;