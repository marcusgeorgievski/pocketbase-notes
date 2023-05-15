import React from "react";
import Link from "next/link";

type Props = {};

export default function Nav({}: Props) {
  return (
    <nav className="pb-1 mb-4 text-blue-600 border-b border-slate-400">
      <ul className="flex gap-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/notes">Notes</Link>
        </li>
      </ul>
    </nav>
  );
}
