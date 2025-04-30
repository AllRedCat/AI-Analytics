"use client"

import React, { useEffect, useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { POST } from '@/api/gemini/route';

export default function Home() {
  
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const message = formData.get('message') as string;

    if (message) {
      try {
        const request = new Request('/api/gemini', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt: message }),
        });
        const response = await POST(request);
        console.log('Response:', response);
      } catch (error) {
        console.error('Error (page - chat):', error);
      }
    }
  }

  return (
    <div className="p-4 pt-8 h-full">
     <Card className="w-full h-full justify-between">
      <CardHeader className='text-white'>
      <CardTitle>Chat</CardTitle>
      </CardHeader>
      <CardContent>
      </CardContent>
      <CardFooter>
        <form onSubmit={handleSubmit} className="flex w-full gap-2">
          <Input name="message" />
          <Button type='submit' className="bg-neutral-50 text-black cursor-pointer">Send</Button>
        </form>
        {/* <EntryChat /> */}
      </CardFooter>
     </Card>
    </div>
  );
}