"use client";

import { Card, Input, Button } from "@/components/ui";
import Messages from "./messages";

export default function Login() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 min-h-screen">
      <div className="bg-stone-900 hidden md:block px-4">
        <div className="flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-foreground text-6xl font-display mb-4 text-white">
            Yawning Maw
          </h1>
          <p className="text-foreground text-3xl font-light text-white">
            {`It's intel for foodies.`}
          </p>
        </div>
      </div>
      <div className="px-4 flex items-center justify-center">
        <Card className="w-[400px] py-8 px-12 shadow-md">
          <h3 className="font-display text-3xl text-center">Welcome to</h3>
          <h2 className="font-display text-3xl text-center mb-6">
            Yawning Maw
          </h2>
          <form
            className="flex-1 flex flex-col w-full justify-center gap-2 text-foreground max-w-xl mx-auto"
            action="/auth/sign-in"
            method="post"
          >
            <label className="text-xs" htmlFor="email">
              Email
            </label>
            <Input
              className="rounded-md px-4 py-2 bg-inherit border mb-6"
              name="email"
              placeholder="you@example.com"
              required
            />
            <label className="text-xs" htmlFor="password">
              Password
            </label>
            <Input
              className="rounded-md px-4 py-2 bg-inherit border mb-6"
              type="password"
              name="password"
              placeholder="••••••••"
              required
            />
            <Button>Sign In</Button>
            <div className="flex gap-2 items-center max-w-full py-2">
              <div className="w-full border-t bg-stone-300" />
              <span>OR</span>
              <div className="w-full border-t bg-stone-300" />
            </div>
            <Button formAction="/auth/sign-up">Sign Up</Button>

            <div className="mt-2">
              <Messages />
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}
