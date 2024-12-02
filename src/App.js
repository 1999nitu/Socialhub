import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Forms/Dashboard';
import SideBar from './Components/Forms/SideBar';
import Todo from './Components/Forms/Todo';
import UserProfile from './Components/Forms/UserProfile';
import Form1 from './Components/Forms/Form1';
import MultipleUsers from './Components/Forms/MultipleUsers';
import Pricing from './Components/Pricing';
import Card from './Components/Forms/Card';
import NewCard from './Components/Forms/NewCard';
import { UserProvider } from './Components/Forms/UserContext';
import Navigations from './Components/Forms/Navigations';
import Referncee from './Components/Referncee';
// import Login from './Components/Forms/Login';
// import Register from './Components/Forms/Register';

function App() {
  const [userData, setUserData] = useState({});
  // console.log(userData);
  const [currentUser, setCurrentUser] = useState({});


  return (
    <BrowserRouter>
    <UserProvider>
      <Routes>
        <Route path='/form1' element={<Form1 setUserData={setUserData} setCurrentUser={setCurrentUser} />}></Route>
        <Route path='/' element={<Form1 setUserData={setUserData} setCurrentUser={setCurrentUser} />}></Route>
        <Route path='/dashboard' element={<Dashboard userData={userData} currentUser={currentUser} />}></Route>
        <Route path='/multipleusers' element={<MultipleUsers userData={userData} />}></Route>
        <Route path='/sidebar' element={<SideBar />}></Route>
        <Route path='/card' element={<Card />}></Route>
        <Route path='/newcard' element={<NewCard />}></Route>
        <Route path='/navigations' element={<Navigations />}></Route>
        {/* <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route> */}
        <Route path='/todo' element={<Todo />}></Route>
        <Route path="/userprofile" element={<UserProfile userData={userData} />} />
        <Route path="/pr" element={<Pricing />} />
        <Route path="/refer" element={<Referncee />} />
       
      </Routes>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App;

