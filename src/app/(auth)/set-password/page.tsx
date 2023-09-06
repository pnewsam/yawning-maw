"use client";

import { Card, Input, Button } from "@/components/ui";
import { FormEvent, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function SetPassword() {
  const [password, setPassword] = useState("");
  const supabase = createClientComponentClient();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const result = await supabase.auth.updateUser({ password });
    console.log(result);
  };

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
          <form
            className="flex-1 flex flex-col w-full justify-center gap-2 text-foreground max-w-xl mx-auto"
            onSubmit={onSubmit}
          >
            <Input
              className="rounded-md px-4 py-2 bg-inherit border mb-6"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              placeholder="••••••••"
              required
            />
            <Button>Set password</Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
