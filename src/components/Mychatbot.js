import React from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';

import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';

function MyChatbot() {
    return (
        <div>
            <Chatbot
                config={config}
                actionProvider={ActionProvider}
                messageParser={MessageParser}
            />
        </div>
    );
}

export default MyChatbot;
