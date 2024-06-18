Cette application permet de gérer les utilisateurs, leurs véhicules, et de fournir les positions des véhicules en temps réel via WebSocket.
- installation des dependances:
npm install
- configurer les variables d'environnement:
 MONGO_URI=mongodb://localhost:27017/npm_project_fonkui
  JWT_SECRET=your_jwt_secret
  SESSION_SECRET=your_session_secret
  PORT=5000
  - On genere le secret jwt:
  node generateJwtSecret.js ( et on le remplace par sa valeur dans le fichier .env)
  - Ensuite on genere le session secret :
  node generateSessionSecret.js (et on le remplace dans le fichier .env)
 - lancement du serveur:
 npm start ou npm server.js


 - utilisation des API:
    # creation des utilisateurs:
    avec la methode POST et l'URL: /api/auth/register
    La reponse sera un jwt_token
Body : { "username": "your_username", "password": "your_password" }
    # connexion utilisateurs:
   methode: POST, URL: /api/auth/login
Body : { "username": "your_username", "password": "your_password" }
    deconnexion des utilisateurs:
    POST /api/auth/logout

    Pour Obtenir les positions des véhicules
URL: /api/vehicles
Méthode: GET
ecrire sur le fichier json de POSYMAN/
        {
        "x-auth-token": "jwt_token"
        }
La reponse sera:
 [
  {
    "vehicleId": "vehicle1",
    "location": {
      "type": "Point",
      "coordinates": [12.34, 56.78]
    },
    "lastUpdate": "2023-06-15T00:00:00.000Z"
  }
]


    