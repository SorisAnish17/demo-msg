import React from 'react'
import { useState ,useEffect} from 'react'
import { userChats } from "../../api/ChatRequests"
import "./Chat.css";
import Conversation from "../../components/Conversation/Conversation"
import ChatBox from '../../components/ChatBox/ChatBox';

const adminDetails={
    name:"soris-dev",
    adminId:"65eed028691760a847b2725d"
}

const Chat = () => {
    const [chats, setChats] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [sendMessage, setSendMessage] = useState(null);
    const [receivedMessage, setReceivedMessage] = useState(null);

    useEffect(() => {
        const getChats = async () => {
          try {
            const { data } = await userChats(adminDetails.adminId);
            setChats(data);
            console.log(data)
          } catch (error) {
            console.log(error);
          }
        };
        getChats();
      }, [adminDetails.adminId]);

  return (
    <div className="Chat">
    {/* Left Side */}
    <div className="Left-side-chat">
      <div className="Chat-container">
        <h2>Chats</h2>
        <div className="Chat-list">
        {chats.map((chat) => (
              <div
                onClick={() => {
                  setCurrentChat(chat);
                }}
              >
                <Conversation
                  data={chat}
                  currentUser={adminDetails.adminId}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
    <div className="Right-side-chat">
        <div style={{ width: "20rem", alignSelf: "flex-end" }}>
    
        </div>
        <ChatBox
          chat={currentChat}
          currentUser={adminDetails.adminId}
          setSendMessage={setSendMessage}
          receivedMessage={receivedMessage}
        />
      </div>
</div>
  )
}

export default Chat
