import React, { useState } from 'react';

const DragAndDropDemo = () => {
  const [dragMessage, setDragMessage] = useState(
    'Drag the blue box into the drop area.'
  );

  const handleDragStart = (e) => {
    setDragMessage('Drag started.');
    e.dataTransfer.setData('text/plain', 'Dragged Data');
  };
  const handleDrag = () => setDragMessage('Dragging...');
  const handleDragEnd = () => setDragMessage('Drag ended.');
  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragMessage('Drag entered drop area.');
  };
  const handleDragOver = (e) => {
    e.preventDefault(); // Necessary to allow drop
    setDragMessage('Dragging over drop area.');
  };
  const handleDragLeave = () => setDragMessage('Drag left drop area.');
  const handleDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('text/plain');
    setDragMessage('Dropped! Data: ' + data);
  };

  return (
    <div>
      <h2>Drag and Drop Demo</h2>
      <div
        draggable
        onDragStart={handleDragStart}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: 'lightblue',
          marginBottom: '10px',
          textAlign: 'center',
          lineHeight: '100px',
          cursor: 'grab'
        }}
      >
        Drag me
      </div>
      <div
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        style={{
          width: '200px',
          height: '200px',
          border: '2px dashed gray',
          textAlign: 'center',
          lineHeight: '200px'
        }}
      >
        Drop here
      </div>
      <p>{dragMessage}</p>
    </div>
  );
};

export default DragAndDropDemo;