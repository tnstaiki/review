import React from 'react';
import axios from 'axios';

const ExampleComponent = () => {
    const sendData = async () => {
        try {
            const response = await axios.post('/api/example', {
                name: 'John Doe',
                email: 'johndoe@example.com'
            });
            console.log('サーバーからのレスポンス:', response.data);
        } catch (error) {
            console.error('エラーが発生しました:', error);
        }
    };

    return (
        <div>
            <button onClick={sendData}>データ送信</button>
        </div>
    );
};

export default ExampleComponent;
