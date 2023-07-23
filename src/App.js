import React, { useState } from 'react';
import './App.css';
import { Button, Flex, InputItem, WhiteSpace, Toast } from 'antd-mobile';
import queryString from 'query-string';

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

const operators = ['plus', 'minus']; // times
const getRandomOperation = () => {
    return operators[Math.floor(Math.random() * operators.length)];


};

const parsedQueryStrings = queryString.parse(window.location.search);
const name = parsedQueryStrings.name;
const max = parsedQueryStrings.max;
let operator = operators[0];
let rand1 = getRandomInt(2, max);
let rand2 = getRandomInt(0, (operator === 'plus' || operator === 'times') ? (max - rand1) : (rand1 + 1));

function App() {
    const [answer, setAnswer] = useState('');

    const checkResponse = () => {
        const result = operator === 'plus' ? rand1 + rand2 : (operator === 'minus' ? rand1 - rand2 : rand1 * rand2);
        if (answer === result) {
            Toast.info('Rätt!', 1, null, false);
            operator = getRandomOperation();
            let tempMax = operator === 'times' ? '6' : max;
            rand1 = getRandomInt(2, tempMax);
            rand2 = getRandomInt(1, (operator === 'plus') ? (tempMax - rand1) : (operator === 'minus' ? (rand1 + 1) : tempMax));
            setAnswer('');
        } else {
            Toast.info('Försök igen!', 1, null, false);
        }
    };

    const onNumberClick = (value) => {
        if (value === 'back') {
            if (answer.length > 0) {
                setAnswer(answer.substring(0, answer.length - 1));
            }
        } else {
            setAnswer(answer.concat(value));
        }
    };

    const flexItem = (valueArr) => {
        return valueArr.map(value =>
            (<Flex.Item style={{ fontSize: 17 }} key={value}>
                <Button style={{ height: '3.5em', lineHeight: '3.5em' }} onClick={() => onNumberClick(value)}>{value}</Button>
            </Flex.Item>))
    };

    return (
        <div className="flex-container">
            <div className="sub-title">Dags att räkna {name}!</div>
            <WhiteSpace size="lg" />
            <Flex>
                <Flex.Item style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>
                    {rand1} {operator === 'plus' ? ' + ' : (operator === 'minus' ? ' - ' : <span> &times; </span>)} {rand2}
                </Flex.Item>
                <Flex.Item>
                    <InputItem
                        value={answer}
                        style={{ color: 'black' }}
                        type="text"
                        disabled
                        placeholder="Svar"
                    />
                </Flex.Item>
                <Flex.Item style={{ textAlign: 'center' }}>
                    <img alt="" style={{ height: '5em' }} src="apadapa.png"></img>
                </Flex.Item>
            </Flex>
            <WhiteSpace size="lg" />
            <Flex>
                {flexItem([1, 2, 3])}
            </Flex>
            <WhiteSpace size="md" />
            <Flex>
                {flexItem([4, 5, 6])}
            </Flex>
            <WhiteSpace size="md" />
            <Flex>
                {flexItem([7, 8, 9])}
            </Flex>
            <WhiteSpace size="md" />
            <Flex>
                <Flex.Item>
                    <Button style={{ height: '3.5em', lineHeight: '3.5em' }} onClick={() => onNumberClick('back')}>
                        <span style={{ fontSize: '2em' }}>&larr;</span>
                    </Button>
                </Flex.Item>
                {flexItem([0])}
                <Flex.Item style={{ fontSize: 17 }}>
                    <Button style={{ height: '3.5em', lineHeight: '3.5em' }} onClick={checkResponse}>
                        <span style={{ fontSize: '1em' }}>&#10004;</span>
                    </Button>
                </Flex.Item>
            </Flex>
        </div >
    );
}

export default App;
