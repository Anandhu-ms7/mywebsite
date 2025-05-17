document.addEventListener('DOMContentLoaded', function() {
    const registrationButton = document.getElementById('registration-button');

    registrationButton.addEventListener('click', function() {
        document.getElementById('registrationModal').style.display = 'flex';
    });

    document.getElementById('closeModal').onclick = function() {
        document.getElementById('registrationModal').style.display = 'none';
    };

    window.onclick = function(event) {
        const modal = document.getElementById('registrationModal');
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };

    document.getElementById('registrationForm').onsubmit = function(e) {
        e.preventDefault();
        alert('Thank you for registering!');
        document.getElementById('registrationModal').style.display = 'none';
    };
});
