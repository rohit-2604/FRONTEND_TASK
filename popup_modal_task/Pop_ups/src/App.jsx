import React, { useRef, useEffect } from 'react';
import CustomModal from './Components/CustomModal';
import {
    openFormPopup,
    openTextPopup,
    openErrorPopup,
    initializeModal,
} from './utils/popupUtils';

function App() {
    const modalRef = useRef();

    useEffect(() => {
        initializeModal(modalRef.current);
    }, []);

    const handleOpenForm = () => {
        openFormPopup('Enter your name', 'Name', (inputValue) => {
            openTextPopup(`Hello, ${inputValue}!`);
        });
    };

    const handleShowError = () => {
        openErrorPopup('This is a test error message.');
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Welcome to the Popup App!</h1>
            <button
                onClick={handleOpenForm}
                className="bg-blue-500 text-white p-2 rounded mb-4"
            >
                Open Form Modal
            </button>
            <button
                onClick={handleShowError}
                className="bg-red-500 text-white p-2 rounded"
            >
                Show Error Modal
            </button>
            <CustomModal ref={modalRef} />
        </div>
    );
}

export default App;
