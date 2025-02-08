import React, { useState } from 'react';

const KeyboardEventsDemo = () => {
  const [keyInfo, setKeyInfo] = useState('');

  const handleKeyDown = (e) => setKeyInfo(`Key Down: ${e.key}`);
  const handleKeyPress = (e) => setKeyInfo(`Key Press: ${e.key}`);
  const handleKeyUp = (e) => setKeyInfo(`Key Up: ${e.key}`);

  return (
    <div>
      <h2>Keyboard Events Demo</h2>
      <input
        type="text"
        placeholder="Type something..."
        onKeyDown={handleKeyDown}
        onKeyPress={handleKeyPress}
        onKeyUp={handleKeyUp}
      />
      <p>{keyInfo}</p>
    </div>
  );
};

export default KeyboardEventsDemo;