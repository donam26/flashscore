import * as React from 'react';
import PushPinIcon from '@mui/icons-material/PushPin';
import AddIcon from '@mui/icons-material/Add';
const SideBar = () => {
  return (
    <div className="p-4">
      <div>
        <div className="mb-4">
          <span className="font-bold  flex items-center whitespace-nowrap overflow-hidden truncate letter">
            <PushPinIcon className="mr-2 = text-gray-700 icon" /> GIẢI ĐẤU ĐƯỢC GHIM
          </span>
          <hr class="mb-3 mt-1 border-gray-200 border-t-2" />
          <ul className="space-y-2">
            <li className="flex items-center whitespace-nowrap overflow-hidden truncate">
              <img src="https://flagcdn.com/16x12/gb.png" alt="Ngoại hạng Anh" className="mr-2" />
              Ngoại hạng Anh
            </li>
            <li className="flex items-center whitespace-nowrap overflow-hidden truncate">
              <img src="https://flagcdn.com/16x12/de.png" alt="Bundesliga" className="mr-2" />
              Bundesliga
            </li>
            <li className="flex items-center whitespace-nowrap overflow-hidden truncate">
              <img src="https://flagcdn.com/16x12/es.png" alt="La Liga" className="mr-2" />
              La Liga
            </li>
            {/* Các thẻ <li> còn lại cũng được thêm class tương tự */}
            <li className="flex items-center whitespace-nowrap overflow-hidden truncate">
              <img src="https://flagcdn.com/16x12/vn.png" alt="V.League 1" className="mr-2" />
              V.League 1
            </li>
            <li className="flex items-center whitespace-nowrap overflow-hidden truncate">
              <img src="https://flagcdn.com/16x12/vn.png" alt="V.League 2" className="mr-2" />
              V.League 2
            </li>
            <li className="flex items-center whitespace-nowrap overflow-hidden truncate">
              <img src="https://flagcdn.com/16x12/vn.png" alt="Cúp Quốc gia" className="mr-2" />
              Cúp Quốc gia
            </li>
            <li className="flex items-center whitespace-nowrap overflow-hidden truncate">
              <img src="https://flagcdn.com/16x12/it.png" alt="Serie A" className="mr-2" />
              Serie A
            </li>
            <li className="flex items-center whitespace-nowrap overflow-hidden truncate">
              <img src="https://flagcdn.com/16x12/ae.png" alt="Asian Cup" className="mr-2" />
              Asian Cup
            </li>
            <li className="flex items-center whitespace-nowrap overflow-hidden truncate">
              <img src="https://flagcdn.com/16x12/af.png" alt="AFC Champions League" className="mr-2" />
              AFC Champions League
            </li>
            <li className="flex items-center whitespace-nowrap overflow-hidden truncate">
              <img src="https://flagcdn.com/16x12/eu.png" alt="Champions League" className="mr-2" />
              Champions League
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="bg-red-500 text-center p-4">
            <img src="https://images-products.s3.us-east-1.amazonaws.com/dowload_fc24a563fc.jpg" alt="Quảng cáo" className="mx-auto my-2" />
          </div>
          <p className="text-center text-sm text-gray-500 mt-2">Quảng cáo</p>
        </div>

        <div className="mb-4">
          <ul className="space-y-2">
            <li className="flex items-center whitespace-nowrap overflow-hidden truncate">
              <img src="https://flagcdn.com/16x12/eu.png" alt="Europa League" className="mr-2" />
              Europa League
            </li>
            <li className="flex items-center whitespace-nowrap overflow-hidden truncate">
              <img src="https://flagcdn.com/16x12/eu.png" alt="World Championship" className="mr-2" />
              World Championship
            </li>
            <li className="flex items-center whitespace-nowrap overflow-hidden truncate">
              <img src="https://flagcdn.com/16x12/eu.png" alt="World Cup Nữ U17" className="mr-2" />
              World Cup Nữ U17
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="mb-8">
          <span className="font-bold  flex items-center whitespace-nowrap overflow-hidden truncate letter">
            <PushPinIcon className="mr-2 = text-gray-700 icon" /> ĐỘI BÓNG CỦA TÔI
          </span>
          <hr class="mb-3 mt-1 border-gray-200 border-t-2" />
          <ul className="space-y-2">
            <li className="flex font-bold items-center whitespace-nowrap overflow-hidden truncate text-red-500">
              <AddIcon className="mr-2 font-light icon" />
              THÊM ĐỘI BÓNG
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="mb-4">
          <span className="font-bold text-lg block mb-2">
            QUỐC GIA
          </span>
          <hr className="mb-3 mt-1 border-gray-200 border-t" />
          <ul className="space-y-2">
            {['Ai Cập', 'Albania', 'Algeria', 'Andorra', 'Ấn Độ', 'Angola', 'Anh', 'Antigua & Barbuda', 'Áo', 'Ả Rập Xê Út', 'Argentina', 'Armenia', 'Aruba', 'Azerbaijan', 'Bắc Ireland', 'Bắc Macedonia', 'Bahrain', 'Ba Lan', 'Bangladesh', 'Barbados', 'Belarus', 'Benin'].map((country, index) => (
              <li key={index} className="text-gray-700 opacity-80">
                {country}
              </li>
            ))}
          </ul>
          <button className="mt-3  text-sm flex items-center">
            Hiển thị thêm
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
}

export default SideBar;
