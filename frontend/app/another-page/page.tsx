"use client";
import { Button } from "@mantine/core";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <p className="mt-10 text-3xl">Hello Next.js another page</p>

        <div className="mt-10">
          <Link href="/">
            <Button color="green">go back</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
