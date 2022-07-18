import { useState } from "react";
import {
  signInWithGoolePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";

import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

import './sign-in-form.styles.scss';

const defaultFormField = {
  email: '',
  password: '',
};

const SignInForm = () => {

  const [formFields, setFormFields] = useState(defaultFormField);
  const { email, password } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();

      console.log(user);

    } catch (error) {
      if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') {
        alert("Incorrect email or password!");
      };

      console.log("User Creation failed: ", error.message);
    }
  }

  const resetFormFields = () => {
    setFormFields(defaultFormField);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  }

  const signInWithGooglePopup = async () => {
    
    const { user } = await signInWithGoolePopup(); // user object from response
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>

        <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />

        <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />

        <div className="buttons-container">
          <Button type="submit" >Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGooglePopup}>Google Sign In</Button>
        </div>
      </form>
    </div>
  );
}


export default SignInForm;
