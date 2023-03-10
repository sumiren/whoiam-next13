"use client";
import { Button } from "@mantine/core";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <p className="mt-10 text-3xl">Hello Next.js こんにちは</p>
        <Button>nice button</Button>

        <div className="mt-10">
          <Link href="/another-page">
            <Button color="green">go to another page</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
