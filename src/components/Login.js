import React from 'react';
import axios from 'axios';

function Login() {
  const handleGoogleLogin = async () => {
    try {
      const response = await axios.get('http://localhost:30099/auth/google');
      window.location.href = response.data.auth_url; // Google 인증 페이지로 리디렉션
    } catch (error) {
      console.error('Google login failed:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </div>
  );
}

export default Login;
