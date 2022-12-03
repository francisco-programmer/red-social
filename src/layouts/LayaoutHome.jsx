import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const LayaoutHome = () => {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <div className="">
        <Header />
        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default LayaoutHome