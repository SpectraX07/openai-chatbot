import { OpenAI } from 'openai';  // Import OpenAI directly

// Instantiate the OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,  // Use your API key
});

export const chat = async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    // Call the createChatCompletion method on the OpenAI instance
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: message }],
    });

    // Extract the reply from the response
    const reply = response.choices[0].message.content;
    res.json({ reply });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to communicate with OpenAI' });
  }
};
