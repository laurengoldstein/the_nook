import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import PrivateRoute from './components/PrivateRoute';
import ErrorView from './views/ErrorView';
import ProfileView from './views/ProfileView';



function App() {
    

    return (
        <div className="App">
            <NavBar/>

            <div className="container">
                <Routes>
                  
                    <Route path="/" element={<h1>Home</h1>} />
                
                    <Route path="/users/:userId" element={
                        <PrivateRoute>
                            <ProfileView />
                        </PrivateRoute>
                    } />
                    
                    <Route path="*" element={<ErrorView code="404" text="Page not found" />} />
                </Routes>
                
            </div>
          
        </div>
    );
}


export default App;