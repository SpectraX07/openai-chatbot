document.getElementById('send-btn').addEventListener('click', async () => {
    const inputField = document.getElementById('chat-input');
    const chatBox = document.getElementById('chat-box');
    const userMessage = inputField.value.trim();
  
    if (!userMessage) return;
  
    // Display user message
    const userMessageDiv = document.createElement('div');
    userMessageDiv.className = 'user';
    userMessageDiv.textContent = userMessage;
    chatBox.appendChild(userMessageDiv);
  
    // Clear input
    inputField.value = '';
  
    // Send message to API
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        const botReplyDiv = document.createElement('div');
        botReplyDiv.className = 'bot';
        botReplyDiv.textContent = data.reply;
        chatBox.appendChild(botReplyDiv);
      } else {
        alert(data.error || 'Error communicating with the bot.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error communicating with the bot.');
    }
  
    // Scroll to the bottom
    chatBox.scrollTop = chatBox.scrollHeight;
  });
  