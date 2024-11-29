'use client';
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";



export default function Home() {
  const [msg, setMsg] = useState('oi');
  
  const toggleMsg = () => {
    setMsg((prevMsg) => (prevMsg === 'oi' ? 'novo' : 'oi'));
  };

  return (
    <div className={styles.page}>
      <p>{msg}</p>
      <button onClick={toggleMsg}>Clique</button>
    </div>
  );
}