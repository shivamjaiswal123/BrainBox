import React, { useRef, useState } from 'react';
import { Cross } from '../icons/Cross';
import Label from './Label';
import Input from './Input';
import { useContent } from '../hooks/useContent';

interface ModalProps {
  open: boolean;
  close: () => void;
}

function AddContentModal({ open, close }: ModalProps) {
  const [type, setType] = useState('');
  const titleRef = useRef<HTMLInputElement>(null);
  const urlRef = useRef<HTMLInputElement>(null);
  const todoRef = useRef<HTMLTextAreaElement>(null);

  const { addNewContent } = useContent();

  const handleType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setType(e.target?.value);
  };

  const addContent = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const title = titleRef.current?.value;
    const link = urlRef.current?.value;
    addNewContent({ type, title, link });
  };

  return (
    <div>
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-end">
              <button onClick={close}>
                <Cross />
              </button>
            </div>
            <h2 className="text-lg font-bold mb-6">Add New Content</h2>
            <form onSubmit={addContent}>
              <div className="mb-4 flex items-center gap-4">
                <Label label="Type" />
                <select
                  name="type"
                  onChange={handleType}
                  className="w-full p-2 border rounded-md"
                  required
                >
                  <option value="">Select content type</option>
                  <option value="youtube">YouTube</option>
                  <option value="tweet">X</option>
                  <option value="link">Link</option>
                  <option value="todo">Todo</option>
                </select>
              </div>
              <div className="mb-4 flex items-center gap-4">
                <Label label="Title" />
                <Input type="text" iRef={titleRef} />
              </div>
              {type === 'todos' ? (
                <div className="mb-4 flex items-center gap-4">
                  <Label label="Description" />
                  <textarea
                    ref={todoRef}
                    className="w-full p-2 border rounded-md"
                    required
                  ></textarea>
                </div>
              ) : (
                <div className="mb-4 flex items-center gap-4">
                  <Label label="URL" />
                  <Input type="url" iRef={urlRef} />
                </div>
              )}
              <div className="text-end">
                <button className="px-4 py-2 bg-black text-white rounded-md text-sm font-medium tracking-wider hover:bg-gray-800 transition duration-350">
                  Add Content
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddContentModal;
