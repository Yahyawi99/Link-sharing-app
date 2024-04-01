"use client";

import { useMain } from "@/context";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import PhoneCardPreview from "@/components/preview/phone-card";
import styles from "@/styles/pages/preview/index.module.css";

export default function Preview() {
  const { links, user, getData } = useMain();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const shareLink = () => {
    const link = `${window.location.origin}/user/${user?.id}`;
    navigator.clipboard.writeText(link);

    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <div className={styles.container}>
      <div>
        <header>
          <Link href="/">
            <button>Back to Editor</button>
          </Link>

          <button onClick={shareLink}>Share Link</button>
        </header>
      </div>

      <PhoneCardPreview links={links} user={user} />

      <div className={`${styles.copyModal} ${copied ? styles.copied : ""}`}>
        <Image src="/icons/icon-link.svg" alt="chain" width={25} height={25} />
        <p>The link has been copied to your clipboard</p>
      </div>
    </div>
  );
}
