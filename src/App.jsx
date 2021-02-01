import { ChatEngine } from 'react-chat-engine';

const {
  REACT_APP_API_KEY,
  REACT_APP_ADMIN_USER,
  REACT_APP_USER_SECRET,
} = process.env;

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID={REACT_APP_API_KEY}
      userName={REACT_APP_ADMIN_USER}
      userSecret={REACT_APP_USER_SECRET}
    />
  );
};

export default App;
