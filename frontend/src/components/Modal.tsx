import React, { useState } from 'react';
import { X } from '../icons/X';
import Input from './Input';

function Modal() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {open && (
        <div className="h-screen w-screen flex justify-center bg-gray-600 opacity-70 fixed left-0">
          <div className="flex flex-col justify-center">
            <div className="bg-white opacity-100 p-6 rounded-md">
              <div className="flex justify-end mb-6 cursor-pointer">
                <X />
              </div>
              <div className="flex flex-col space-y-4">
                <Input />
                <Input />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
