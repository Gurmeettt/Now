import React from 'react';
import MessageComponent from '../components/MessageComponent';
import textMessages from '../data/messages.json';

const App = () => (
  <main>
    <h1>Welcome to the Chat!</h1>
    {/* {textMessages.sort(function (a, b) {
      return a.timestamp - b.timestamp;
    })} */}
    {
      (textMessages.sort(function (a, b) {
        return a.timestamp.localeCompare(b.timestamp);
      }),
      textMessages.map((individualMessage) => (
        <MessageComponent
          key={individualMessage.id}
          individualMessage={individualMessage.message}
          individualMessageTimestamp={individualMessage.timestamp}
          userId={individualMessage.userId}
        />
      )))
    }
  </main>
);

export default App;
