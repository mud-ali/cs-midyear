import React from "react";

const Chatbox = () => {
    const [chats, setChats] = useState([]);
    const [newChat, setNewChat] = useState('');
    const maxChats = 12;

    const send = () => {
        if(maxChats < chats.length){
            chats.pop();
        }

        setChats([...chats, { text: newChat, sender: 'user' }]);
        setNewChat('');
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            send();
        }
    };

    return (
        <div className = "chatbox">
            <h2>Chatbox:</h2>
            <div className = "messages">
                {chats.map((message, index) => (
                    <div key={index} className={message.sender === 'user' ? 'user-message' : 'other-message'}>
                        {message.text}
                    </div>
                ))}
            </div>

            <div>
                <input type="text" value={newChat}
                    onChange = {(e) => setNewChat(e.target.value)}
                    onKeyDown = {handleKeyPress}
                    placeholder = "What would you like to say..."
                    className = "border-gray-300 rounded-md w-full text-black">
                </input>

                <button
                    onClick = {send}
                    className = "bg-blue-500 rounded-full w-2/5 mx-20 mt-2 mb-3 hover:bg-indigo-600"
                >
                    Send
                </button>
            </div>
        </div>
    );
}


export default Chatbox;