import React, { useState } from "react";
import * as Components from "./Components";
import image from "./assets/image.png";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function App() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className='App'>
      <Components.Container>
        <Components.RightContainer>
          <img src={image} alt='design' />
        </Components.RightContainer>
        <Components.LeftContainer>
          <Components.Form>
            <Components.Title>Login </Components.Title>
            <Components.InputField>
              <Components.Label htmlFor='id'>Login ID</Components.Label>
              <Components.Input
                id='id'
                type='text'
                placeholder='Enter Login ID'
              />
            </Components.InputField>

            <Components.InputField>
              <Components.Label htmlFor='password'>Password</Components.Label>
              <Components.Input
                id='password'
                type='password' // Use type 'password' for sensitive information
                placeholder='Enter password'
              />
              <span onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />
                ) : (
                  <AiOutlineEye fontSize={24} fill='#AFB2BF' />
                )}
              </span>
              <p>Change Password</p>
            </Components.InputField>

            <Components.LabelCheckbox htmlFor='Remember'>
              <Components.InputCheckbox id='Remember' type='checkbox' />
              <p>Remember Me</p>
            </Components.LabelCheckbox>

            <Components.LabelCheckbox htmlFor='TermsConditions'>
              <Components.InputCheckbox id='TermsConditions' type='checkbox' />
              <p>
                Agree to <a href='#'>Terms & Conditions</a>
              </p>
            </Components.LabelCheckbox>

            <Components.Button type='submit'>Login</Components.Button>
            <Components.Signup>
              Don't have an account? <a href='#'>Register Here</a>
            </Components.Signup>
          </Components.Form>
        </Components.LeftContainer>
      </Components.Container>
    </div>
  );
}

export default App;
