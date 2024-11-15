const express = require('express');
const mqtt = require('mqtt');

const app = express();
const port = 80;

// Connect to the MQTT broker (e.g., 'mqtt://localhost:1883')
const mqttClient = mqtt.connect('mqtt://mosquitto:1883');

// Array to store received MQTT messages
let messages = [];

// Subscribe to a specific topic when connected
mqttClient.on('connect', () => {
  console.log('Connected to MQTT broker');
  mqttClient.subscribe('my/topic', (err) => {
    if (!err) {
      console.log('Subscribed to topic: my/topic');
    } else {
      console.error('Failed to subscribe:', err);
    }
  });
});

// Handle incoming MQTT messages
mqttClient.on('message', (topic, message) => {
  // Convert the message to a string and push it to the array
  messages.push({ topic, message: message.toString() });
  console.log(`Received message: ${message} on topic: ${topic}`);
});

// Set up an Express route to serve the MQTT messages
app.get('/', (req, res) => {
  res.send(`
    <h1>MQTT Messages</h1>
    <ul>
      ${messages.map(msg => `<li><strong>${msg.topic}:</strong> ${msg.message}</li>`).join('')}
    </ul>
  `);
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
