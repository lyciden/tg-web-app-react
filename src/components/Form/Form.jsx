import React, {useEffect} from 'react';
import './Form.css';
import {useTelegram} from "../../hooks/useTelegram";

const Form = () => {
    const [country, setCountry] = React.useState('');
    const [street, setStreet] = React.useState('');
    const [delivery, setDelivery] = React.useState('');
    const {tg} = useTelegram();

    useEffect(() => {
        tg.MainButton.setParams({
            text : 'Отправить данные',
        })
    }, []);

    useEffect(() => {
        if(!street || !country){
            tg.MainButton.hide();
        } else{
            tg.MainButton.show();
        }
    }, [country, street])

    const onChangeCounty = (e) => {
        setCountry(e.target.value);
    }

    const onChangeStreet = (e) => {
        setStreet(e.target.value);
    }

    const onChangeDelivery = (e) => {
        setDelivery(e.target.value);
    }

    return (
        <div className={'form'}>
            <h3>Input your data</h3>
            <input
                className={'input'}
                type="text"
                placeholder={"country"}
                value={country}
                onChange={onChangeCounty}
            />
            <input
                className={'input'}
                type="text"
                placeholder={"street"}
                value={street}
                onChange={onChangeStreet}
            />
            <select value={delivery} onChange={onChangeDelivery} className={'select'}>
                <option value={'noDel'}> without delivery</option>
                <option value={'del'}> with delivery</option>
            </select>

        </div>
    );
};

export default Form;