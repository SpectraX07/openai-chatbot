export const renderHome = (req, res) => {
    res.render('home', { title: 'Welcome to the Chatbot' });
  };
  
  export const renderChatPage = (req, res) => {
    res.render('chat', { title: 'Chat with AI' });
  };
  