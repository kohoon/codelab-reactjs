import React, { Component } from 'react';

class ClassComponent extends Component {
    constructor (props) { // 생성자 함수
        super (props); // constructor를 사용하면 항상 병용. this를 초기화. props를 넣어줘야 this.props 사용 가능
        this.state = { // initial state를 선언
            key: 'initialValue'
        }
        this.handleClick = this.handleClick.bind(this); // .bind(this)를 통해 state와 setState가 연결됨??
        console.log('constructor');
    }; 
      
    static defaultProps =  {
        name: '홍길동'
    };

    handleClick() {
        // console.log(this);
        this.setState({key: 'value2'}) // 클래스형컴포넌트에서 state를 바꿔주는 부분
    };

    componentWillMount() {
        console.log('componentWillMount'); // DOM이 생성되지 않은 단계, setState 실행 X
    };

    componentDidMount() {
        // 외부 데이터 가져오기
        // this.setState({})
        console.log('componentDidMount'); // DOM이 생성된 단계, setState를 통해 DOM의 제어 가능
    };

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps');
    };

    shouldComponentUpdate(nextProps, nextState) {
        // 최적화
        console.log('shouldComponentUpdate');
        return true;
    };

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate');
    }; // setState() => 무한루프

    componentDidUpdate(nextProps, nextState) {
        console.log('componentDidUpdate');
    };

    componentWillUnmount() {
        console.log('componentWillUnmount');
    };

    // componentDidCatch() {
    // 에러 핸들링        
    // }
    
    render() {
        // render 함수를 통해 props를 조회
        // 비구조화할당 방식으로 state와 props 사용 가능
        const { key } = this.state;
        const { name, age, gender } = this.props;
        console.log("render");

        return (
            <div>
                <h1 className='txt-main'>클래스형 컴포넌트</h1>
                <h2>{key}</h2>
                <h2>{name}</h2>
                <button onClick={this.handleClick}>클릭</button>
            </div>
        );
    }
}
export default ClassComponent;