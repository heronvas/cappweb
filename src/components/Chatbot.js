// Chatbot.js

import React, { useState, useRef, useEffect } from 'react';

import { IoSend } from 'react-icons/io5';
import axios from 'axios';
import { ReactComponent as MySVG } from './images/img1.svg';


const Chatbot = ({visible,close}) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false); // Overall loading state
  const messageref = useRef(null);
  const [random10DigitNumber, setrandom] = useState(0);
  
  // const generateRandomNumber = () => {
  //   const randomNumber = Math.floor(1000000000 + Math.random() * 9000000000);
  //   return randomNumber;
  // };

  useEffect(() => {
    // Scroll to the top when the App component mounts
    

    // Set show state to true after 5 seconds
    const timeoutId = setTimeout(() => {
      const generateRandomNumber = () => {
        const randomNumber = Math.floor(1000000000 + Math.random() * 9000000000);
        return randomNumber;
      };
      setrandom(generateRandomNumber);
    
    }, 1000);

    // Clear the timeout when the component unmounts to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []);



  
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  // const handlecompare = async () => {
    

  //   const newUserMessage = {
  //     text: "Would you provide a comparison between ChatGPT and Zulki? ",
  //     type: 'user',
  //   };

  //   setMessages((prevMessages) => [...prevMessages, newUserMessage]);
  //   setInput('');
  //   setLoading(true);

  //   try {
  //     const response = await axios.post(
  //       'https://cardekh.azurewebsites.net/website',
  //       {
  //         phone_no: random10DigitNumber,
  //         message: "Would you provide a comparison between ChatGPT and Zulki? in 4 points ",
  //       }
  //     );

  //     const newBotMessage = {
  //       text: response.data,
  //       type: 'bot',
  //       loading: false, // Set loading to false for the latest bot message
  //     };

  //     setMessages((prevMessages) => [...prevMessages, newBotMessage]);
  //   } catch (error) {
      
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  const handleSendMessage = async () => {
    if (input.trim() === '') return;
    console.log(random10DigitNumber);
    const newUserMessage = {
      text: input,
      type: 'user',
    };

    setMessages((prevMessages) => [...prevMessages, newUserMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await axios.post(
        'https://cardekh.azurewebsites.net/website',
        {
          phone_no: random10DigitNumber,
          message: input,
        }
      );

      const newBotMessage = {
        text: response.data,
        type: 'bot',
        loading: false, // Set loading to false for the latest bot message
      };

      setMessages((prevMessages) => [...prevMessages, newBotMessage]);
    } catch (error) {
      
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    messageref.current?.scrollIntoView();
  }, [messages]);

  const handleEnterPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  // const send1 = async (input1) => {
  //   console.log("clicked")
 

  //   // Create a new user message
  //   const newUserMessage = {
  //     text: input1,
  //     type: 'user',
  //   };

  //   // Add the user message to the messages list
  //   setMessages((prevMessages) => [...prevMessages, newUserMessage]);
  //   setInput('');
  //   setLoading(true);
  //   try {
  //     // Make a POST request to the API
  //     const response = await axios.post(
  //       'https://cardekh.azurewebsites.net/website',
  //       {
  //         phone_no: random10DigitNumber,
  //         message: input1,
  //       }
  //     );

  //     console.log('working');
  //     console.log(response.data);

  //     // Create a new bot message with the API response
  //     const newBotMessage = {
  //       text: response.data,
  //       type: 'bot',
  //       loading : false,
  //     };

  //     // Add the bot message to the messages list
  //     setMessages((prevMessages) => [...prevMessages, newBotMessage]);
  //   } catch (error) {
  //     console.error('Error sending message to the API:', error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    
<div className={visible ? 'chatbot': 'chatbot active'}>{console.log(visible)}
    <div className='fixed  heads  text-center inline-block closer rounded-t-[10px] h-10 text-4xl z-50'>
      <div className='heading float-left text-gray-50 w-48 mt-2 h-6 text-xl'>Vaahan by Apnabot</div>
    <span className="cursor-pointer float-right mr-3 headss" onClick={close}>
        <button className="text-white hover:text-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        
      </span>
     
      
    </div>
    <div className='con1'>
      <div className='introduction'>
        <div className='intro'>Welcome</div>
        <div className='wel'>How may I assist you today?</div>
      </div>
      <div className='messages'>
        <div className='messagebot'>
          <div className='imagebot'>
          <MySVG  className='icon2 text-blue-800' width="38px" height="38px"/>
          </div>
          <div className='bot'>
          👋 Hello! How can I help you today? If you have any questions or need assistance, feel free to ask.
          </div>
        </div>
      </div>
      <div className='faq'>
      <div className="messages">
            <div className="messagebot">
            {/* <div className="bot q1 hover:cursor-pointer" onClick={() => send1('What is Carwale?')}>
            What is Carwale?

              </div>
              <div className="bot q1 hover:cursor-pointer" onClick={() => send1('Hi')}>
              Tell me about different types of cars.

              </div> */}
             


            </div>

          </div>
          <div className="messages">
            <div className="messagebot">
            {/* <div className="bot q1 hover:cursor-pointer" onClick={handlecompare}>
          Comparison between ChatGPT and Zulki
              </div>       */}


            </div>

          </div>
          {/* <div className="messages">
            <div className="messagebot">
            <div className="bot q1 hover:cursor-pointer" onClick={() => send1('How do I get in touch?')}>
            Contact Us
              </div>   
              <div className="bot q1 hover:cursor-pointer" onClick={() => send1('Could you please provide details on pricing?')}>
            Pricing details
              </div>      


            </div>

          </div> */}
          </div>
      <div className='messages'>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${
              message.type === 'bot' ? 'messagebot' : 'messageuser'
            }`}
          >
            <div
             
              className={`image${
                message.type === 'bot' ? 'bot' : 'user'
              }`}
            >
              {message.type === 'bot' ? (
               <MySVG  className='icon2 text-blue-800' width="38px" height="38px"/>) : null}
            </div>
            <div
             
              className={` ${message.type === 'bot' ? 'bot' : 'user'}`}
            >
              {message.text.split('\n').map((item, idx) => {
        return (
          <span key={idx}>
            {item}
            <br/>
          </span>
        );
    })
}
            </div>
          </div>
        ))}
        
      </div>
            
      {
         loading=== true ? (
      <div className='messagebot'>
        <div className='img-bot'><MySVG  className='icon2 text-blue-800' width="38px" height="38px"/></div>
        <div className='loading-spinner bots'></div>
        
    </div>
):console.log('eror')}
      
     

      <div ref={messageref} className='mdiv'></div>
      <div className='chatbot-input'>
        <input
          type='text'
          value={input}
          onChange={handleInputChange}
          className=' inputm'
          placeholder='Type a message...'
          onKeyPress={handleEnterPress}
        />
        <button onClick={handleSendMessage} className='button1'>
          <IoSend className='send' />
        </button>
      </div>
    </div>
  </div>
);
};

export default Chatbot;
