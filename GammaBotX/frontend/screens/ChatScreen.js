import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import axios from 'axios';

export default function ChatScreen() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const sendMessage = async () => {
    const res = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: input }],
    }, {
      headers: {
        'Authorization': `Bearer YOUR_OPENAI_API_KEY`,
        'Content-Type': 'application/json',
      },
    });
    setResponse(res.data.choices[0].message.content);
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Ask something..."
        value={input}
        onChangeText={setInput}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      />
      <Button title="Send" onPress={sendMessage} />
      <Text style={{ marginTop: 20 }}>{response}</Text>
    </View>
  );
}
