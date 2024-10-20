import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const CustomModal = React.forwardRef((_, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [inputLabel, setInputLabel] = useState('');
    const [callback, setCallback] = useState(null);
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const openForm = (modalTitle, label, cb) => {
        setTitle(modalTitle);
        setInputLabel(label);
        setCallback(() => cb);
        setIsOpen(true);
    };

    const openText = (msg) => {
        setMessage(msg);
        setIsOpen(true);
    };

    const openError = (msg) => {
        setErrorMessage(msg);
        setIsOpen(true);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (callback) callback(e.target.elements.input.value);
        setIsOpen(false);
    };

    const closeModal = () => {
        setIsOpen(false);
        setMessage('');
        setErrorMessage('');
    };

    React.useImperativeHandle(ref, () => ({
        openForm,
        openText,
        openError,
    }));

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            className=" flex items-center justify-center border-black"
            
        >
            <div className="p-6 rounded shadow-lg max-w-sm w-full">
            
                <h2 className="text-lg font-bold mb-4 bg-red-600">Notification</h2>
                {inputLabel && (
                    <form onSubmit={handleFormSubmit}>
                        <input
                            name="input"
                            placeholder={inputLabel}
                            className="mt-2 p-2  mb-4 gap-4 border rounded w-full"
                            required
                        />
                        <button
                            type="submit"
                            className="mt-4 bg-blue-500 text-white p-2 rounded "
                        >
                            Submit
                        </button>
                    </form>
                )}
                {message && <p className="mt-6">{message}</p>}
                {errorMessage && <p className="mt-2 text-red-600">{errorMessage}</p>}
                <button
                    onClick={closeModal}
                    className="mt-6 bg-blue-500 text-white p-2 rounded "
                >
                    Close
                </button>
            </div>
        </Modal>
    );
});

export default CustomModal;
