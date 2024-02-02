
import './App.css'
import UserContextProvider from './components/UserContextProvider'
import Login from './components/login'
import Profile from './components/Profile'
function App() {

  
  return (
    <UserContextProvider>
      <h1>hi im psd file</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
