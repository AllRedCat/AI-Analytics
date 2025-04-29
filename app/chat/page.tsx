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

export default function Home() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <div className="p-4 pt-8 h-full">
     <Card className="w-full h-full justify-between">
      <CardHeader>
      <CardTitle>Chat</CardTitle>
      </CardHeader>
      <CardContent>
      </CardContent>
      <CardFooter>
        <form onSubmit={handleSubmit} className="flex w-full gap-2">
          <Input />
          <Button className="bg-neutral-50 text-black cursor-pointer">Send</Button>
        </form>
      </CardFooter>
     </Card>
    </div>
  );
}