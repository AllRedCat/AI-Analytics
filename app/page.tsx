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
    <div className="p-4 pt-8 h-full flex flex-col gap-2">
      <div className="flex gap-2">
        <Card className='w-full'></Card>
        <Card className='w-full'></Card>
      </div>
      <div className="flex gap-2">
        <Card className='w-full'></Card>
        <Card className='w-full'></Card>
      </div>
      <Card></Card>
    </div>
  );
}