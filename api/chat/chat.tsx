'use server'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=GEMINI_API_KEY

function EntryChat() {
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const path = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}` 
        
        const formData = new FormData(e.currentTarget);
        const message = formData.get("message");

        const response = await fetch(path, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{ text: message }]
                }]
            }),
        });

        const data = await response.json();
        console.log(data);
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="flex w-full gap-2">
                <Input name="message" />
                <Button type='submit' className="bg-neutral-50 text-black cursor-pointer">Send</Button>
            </form>
        </>
    );
}

// export { EntryChat }