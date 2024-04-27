document.addEventListener("DOMContentLoaded", function() {
    // Convertir le nom d'utilisateur et le mot de passe en hexadécimal
    var usernameHex = "41646d696e"; // Correspond à "Admin" en hexadécimal
    var passwordHex = "737469"; // Correspond à "Admin" en hexadécimal

    function verifyCredentials(username, password) {
        // Convertir le nom d'utilisateur et le mot de passe entrés en hexadécimal
        var enteredUsernameHex = stringToHex(username);
        var enteredPasswordHex = stringToHex(password);

        // Vérifier si les identifiants sont corrects
        if (enteredUsernameHex === usernameHex && enteredPasswordHex === passwordHex) {
            // Générer un jeton (token)
            var token = generateToken();

            // Stocker le jeton dans le localStorage
            localStorage.setItem('token', token);

            // Rediriger vers la page de succès si les identifiants sont corrects
            window.location.href = './src/dashboard/dashboard.html';
        } else {
            // Afficher une alerte si les identifiants sont incorrects
            alert('Identifiants incorrects. Veuillez réessayer.');
        }
    }

    // Fonction pour générer un jeton (token)
    function generateToken() {
        return Math.random().toString(36).substr(2); // Générer un token aléatoire
    }

    // Fonction pour convertir une chaîne en hexadécimal
    function stringToHex(str) {
        var hex = '';
        for(var i=0; i < str.length; i++) {
            hex += ''+str.charCodeAt(i).toString(16);
        }
        return hex;
    }

    var form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche l'envoi du formulaire par défaut
        
        // Récupérer les valeurs des champs de saisie
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        
        // Vérifier les identifiants
        verifyCredentials(username, password);
    });
});
