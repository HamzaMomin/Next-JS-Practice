'use client'
import { useState } from 'react';
import {useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth'
import {auth} from '@/app/firebae/config'
import { useRouter } from 'next/navigation';
import styles from '@/app/page.module.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const router = useRouter()

  const handleSignIn = async () => {
    try {
        const res = await signInWithEmailAndPassword(email, password);
        console.log({res});
        sessionStorage.setItem('user', true)
        setEmail('');
        setPassword('');
        router.push('/')
    }catch(e){
        console.error(e)
    }
  };

  return (
    <div className={styles.center2}>
      <div className={styles.form}>
        <h1 className={styles.heading}>Sign In</h1>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className={styles.input}
          required
        />
        <input 
          type="password" 
          placeholder="Password" 
        
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          className={styles.input}
          required
        />
        <button 
          onClick={handleSignIn}
          className={styles.button}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignIn;