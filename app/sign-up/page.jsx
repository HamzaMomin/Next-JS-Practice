'use client'
import { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth } from '@/app/firebae/config';
import styles from '@/app/page.module.css';
//import { useRouter } from 'next/navigation';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
  //  const router = useRouter()
   
    const handleSignUp = async () => {
        try {
            const res = await createUserWithEmailAndPassword(email, password)
            console.log({ res })
            sessionStorage.setItem('user', true)
            setEmail('');
            setPassword('')
          // router.push('/')
        } catch (e) {
            console.error(e);
           
        }
    };

    const handleCloseErrorPopup = () => {
        setShowErrorPopup(false); // Close the pop-up when the user clicks a close button or outside the pop-up
    };


    return (

        <div className={styles.center2}>

            <div className={styles.form}>
                <h1 className={styles.heading}>Sign Up</h1>
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
                    onClick={handleSignUp}
                    className={styles.button}
                >
                    Sign Up
                </button>
            </div>
          
        </div>
    );
};

export default SignUp;