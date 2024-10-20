let modalInstance = null;

export function initializeModal(modal) {
    modalInstance = modal;
}

export function openFormPopup(title, inputLabel, callback) {
    if (modalInstance) {
        modalInstance.openForm(title, inputLabel, callback);
    }
}

export function openTextPopup(message) {
    if (modalInstance) {
        modalInstance.openText(message);
    }
}

export function openErrorPopup(errorMessage) {
    if (modalInstance) {
        modalInstance.openError(errorMessage);
    }
}
