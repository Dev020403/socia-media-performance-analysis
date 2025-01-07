const express = require('express');
const cors = require('cors');
const { LangflowClient } = require('./LangFlow'); // Import LangflowClient
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8000;

// Initialize the LangflowClient with your base URL and application token
const langflowClient = new LangflowClient(
    "https://api.langflow.astra.datastax.com",
    'AstraCS:FbGFLDHeJxWZzawGxmffXYlM:e71a4562e886441648dd99f0be637771a734498b6111d9e910e972e4d1440b6d'
);

app.post("/chat", async (req, res) => {
    const prompt = req.body.prompt;
    const post_type = req.body.post_type;

    try {
        const response = await langflowClient.runFlow(
            `${post_type} & ${prompt}`,
            process.env.LANGFLOW_ID,
            prompt, // Use the prompt as input value
            "chat", // default inputType
            "chat", // default outputType
            {} // you can include any necessary tweaks here
        );

        // Process the response and return it
        res.status(200).json({ response });
    } catch (error) {
        console.error("Error during flow execution:", error.message);
        res.status(500).json({ error: "Error during flow execution" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
