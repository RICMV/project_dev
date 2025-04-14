"use client" // this tells Next to make it a client component
import { Button, TextField } from '@mui/material';
import { useEffect, useState } from 'react';

export default function MainPage() {
    const [mailValue, setMailValue] = useState<string>() // initial mail value is an empty string
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true) // initially the button should be disabled
    const [submitted, setSubmitted] = useState<boolean>(false)
    const [pwdValue, setPwdValue] = useState<string>()

    const onChangeMail = (event: React.ChangeEvent<HTMLInputElement>) => {             
        setMailValue(event.target.textContent!)
    }
    const onChangePwd = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPwdValue(event.target.textContent!)
    }
    useEffect(() => {
        if (mailValue != "" && pwdValue != "") {
            setIsButtonDisabled(true)
        } else { setIsButtonDisabled(false) }
    }, [mailValue, pwdValue]); // useEffect is a react function that executes everytime a value is changed, in this case we check every time mailValue changes

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingTop: 20
            }}>
            <h1 style={{ marginBottom: '30px', fontSize: '30px' }}>
                Submit your data
            </h1>
            <TextField
                style={{ height: '30px', width: '300px', marginBottom: '50px' }}
                onChange={onChangeMail}
                helperText="email"
            />
            <TextField
                style={{ height: '30px', width: '300px', marginBottom: '50px' }}
                onChange={onChangePwd}
                helperText="password"
            />
            <Button
                variant='contained'
                color="primary"
                style={{ color: isButtonDisabled ? 'black' : 'white', 
                backgroundColor: isButtonDisabled ? 'grey' : 'blue',
                marginBottom: '30px' }}
                onClick={() => setSubmitted(true)}
                >
                Submit
            </Button>
            {submitted && <p>Succesfully submitted!</p>}
        </div>
    );
}