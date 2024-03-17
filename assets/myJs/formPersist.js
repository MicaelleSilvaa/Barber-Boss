function storeFormData() {
    const formData = {
        firstName: document.getElementById('first_name').value,
        lastName: document.getElementById('last_name').value,
        email: document.getElementById('email').value,
        haircutDescription: document.getElementById('haircut-description').value
    };

    localStorage.setItem('formData', JSON.stringify(formData));
}

function fillFormFromStorage() {
    const formData = JSON.parse(localStorage.getItem('formData'));
    if (formData) {
        document.getElementById('first_name').value = formData.firstName;
        document.getElementById('last_name').value = formData.lastName;
        document.getElementById('email').value = formData.email;
        document.getElementById('haircut-description').value = formData.haircutDescription;
    }
}

document.querySelectorAll('#first_name, #last_name, #email, #haircut-description').forEach(input => {
    input.addEventListener('input', storeFormData);
});

document.addEventListener('DOMContentLoaded', fillFormFromStorage);
