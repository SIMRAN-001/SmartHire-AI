import axios from "axios"
import { model } from "mongoose";

export const askAi = async (messages) => {
    try {
        if (!messages || !Array.isArray(messages) || messages.length === 0) {
            throw new Error("Messages array is empty.");
        }
        const response = await axios.post("https://openrouter.ai/api/v1/chat/completions", {
            model: "openai/gpt-4o-mini",
            messages: messages
        }, {
            headers: {
                Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
                'Content-Type': 'application/json',
            },
        });

        // const content = response?.data?.choices?.[0]?.messages?.content;
        console.log("OpenRouter Response:", JSON.stringify(response.data, null, 2));

        const content = response.data.choices[0].message.content;

        if (!content || !content.trim()) {
            throw new Error("AI returned empty response.");
        }

        return content
    } catch (error) {
        console.error("OpenRouter Error:", error.response?.data || error.message);
        throw new Error("OpenRoter API Error");
    }
}