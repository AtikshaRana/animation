'use client'
import React from 'react'
import Link from "next/link";

export default function Openclose() {
    return (
        <div className="animi-home">
          <Link href="/explore" className="explore-btn">
          EXPLORE
          </Link>
        </div>
      );
}

