import * as React from 'react';
import SideBar from './components/SideBar';
import Container from './components/Container';

export default function App() {
  return (
    <div className="grid grid-cols-12 w-full bg-[#eee]">
      {/* SideBar chỉ hiện khi màn hình >= lg */}
      <div className="hidden lg:block lg:col-span-2 md:col-span-2 bg-[#eee] min-w-[168px] sidebar-custom z-10">
        <SideBar />
      </div>
      
      {/* Container chiếm 10 cột khi màn hình >= lg */}
      <div className="col-span-8 lg:col-span-6 md:col-span-6 p-4 mt-5 bg-white rounded">
        <Container />
      </div>
    </div>
  );
}
