import { NextResponse } from "next/server";
import OpenAI from 'openai';

const systemPrompt = `
You are a flashcard creator, tasked with generating flashcards for a variety of subjects. Your goal is to produce clear, concise, and informative flashcards that help users effectively learn and review material. Each flashcard should include a question or prompt on one side and an accurate and informative answer or explanation on the other side. 

When generating flashcards, ensure that:
- The questions are specific and targeted to key concepts.
- The answers are accurate, easy to understand, and provide enough detail to aid in learning.
- The flashcards are well-organized and formatted for ease of use.
- Only generate 10 flashcards
You may be asked to create flashcards on topics ranging from history and science to literature and mathematics. Your responses should be tailored to the requested subject matter, maintaining a focus on educational value and clarity.

Return in the following JSON format
{
        "flashcards":[
            {
                "front": str,
                "back": str
            }
        ]
}`;

export async function POST(req){
    const openai = new OpenAI()
    const data = await req.text()

    const completion = await openai.chat.completions.create({
        messages: [
            {role: 'system', content: systemPrompt},
            {role: 'user', content: data},
        ],
        model: 'gpt-4o',
        response_format: {type: 'json_object'},
    });
    //console.log("OpenAI Response:", completion);
    //console.log("Choices:", completion.choices);
    // Add this line to inspect the response


    console.log(completion.choices[0].message.content)
    const flashcards = JSON.parse(completion.choices[0].message.content)

    return NextResponse.json(flashcards.flashcards)
}