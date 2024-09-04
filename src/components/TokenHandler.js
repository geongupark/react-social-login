import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const TokenHandler = ({ onTokenSet, onTokenNotFound }) => {
  const location = useLocation();
  const token = new URLSearchParams(location.search).get('token');

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
      onTokenSet(); // 토큰이 설정되었음을 부모 컴포넌트에 알림
      window.history.replaceState({}, document.title, location.pathname); // URL에서 토큰 제거
    } else {
      onTokenNotFound(); // 토큰이 없으면 로딩 종료
    }
  }, [token, location.pathname, onTokenSet, onTokenNotFound]);

  return null;
};

export default TokenHandler;
