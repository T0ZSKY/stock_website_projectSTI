document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche l'envoi du formulaire par défaut
        
        // Récupérer les valeurs des champs de saisie
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        
        // Vérifier si les identifiants sont corrects (exemple de vérification)
        if (username === 'Admin' && password === 'Admin') {
            // Rediriger vers la page de succès
            window.location.href = './src/dashboard/dashboard.html';
        } else {
    
            alert('Identifiants incorrects. Veuillez réessayer.');
        }
    });
});
