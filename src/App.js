import * as React from 'react';
import SideBar from './components/SideBar';
import Container from './components/Container';

export default function App() {
  return (
    <div className="grid grid-cols-12 w-full bg-[#eee] ">
      <div className="col-span-1 bg-[#eee]">
      </div>
      <div className="col-span-1 bg-[#eee]">
        <SideBar />
      </div>
      <div className="col-span-4 p-4 mt-5 bg-white rounded">
         <Container />
      </div>
      <div className="col-span-2 bg-[#eee]">
      </div>
    </div>
  );
}
