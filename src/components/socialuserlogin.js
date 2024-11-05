import React from 'react';

const SocialLogin = () => {
  const handleSocialLogin = (provider) => {
    window.location.href = `http://127.0.0.1:8000/api/auth/social/login/${provider}/`;
  };

  return (
    <div>
      <button onClick={() => handleSocialLogin('google')}>Login with Google</button>
      {/* You can add other social media buttons like Facebook, GitHub, etc. */}
    </div>
  );
};

export default SocialLogin;
