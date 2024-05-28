import { Button } from '@mui/material'
import React, { useState } from 'react'
import { toast, Toaster } from 'react-hot-toast'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import OTPInput from 'react-otp-input'
import { auth } from './firebase'

const App8 = () => {
    const [ph, setPh] = useState('')
    const [user, setUser] = useState(null)
    const [otp, setOtp] = useState('')
    const [otpSent, setOtpSent] = useState(false)

    const sendOtp = async () => {
        toast.success('OTP send successfully', {
            duration: '250'
        })
        try {
            const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {})
            const confirm = await signInWithPhoneNumber(auth, ph, recaptcha)
            setUser(confirm)
            setOtpSent(true)
            console.log('con', confirm);
        }
        catch (err) {
            console.log(err);
        }
    }

    const VerifyOTP = async () => {
        try {
            const data = await user.confirm(otp)
            console.log('data', data);
        }
        catch (err) {
            console.error(err);
        }
        toast.success('verified OTP successfully')
    }

    return (
        <div style={{ margin: '50px' }}>
            <PhoneInput
                country={"in"}
                value={ph}
                onChange={(ph) => setPh("+" + ph)}
            />
            <Button onClick={sendOtp} variant='contained' style={{ marginTop: '10px' }}>Send OTP</Button>
            <div style={{ marginTop: '10px' }} id="recaptcha"></div>
            <br />
            {otpSent && (
                <>
                    <OTPInput value={otp} onChange={setOtp} renderSeparator={<span>&nbsp;</span>} numInputs={6}
                        renderInput={(props) => <input {...props} />} style={{ marginTop: '10px', width: '300px' }} />
                    <br />
                    <Button style={{ marginTop: '10px' }} variant='contained' color='success' onClick={VerifyOTP}>Verify OTP</Button>
                </>
            )}
            <Toaster />
        </div>
    )
}

export default App8