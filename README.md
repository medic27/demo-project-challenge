Get posgresql (https://postgresapp.com/) if you don't already have it. Regarding step 4, if you are using postgresapp, it defaults to port 5432, no password, and the same username as your logged in computer profile.

1. `git clone https://github.com/medic27/demo-project-challenge.git`
2. `cd demo-project-challenge`
3. `npm install`
4. `echo DATABASE_URL=postgres://yourusername:yourpassword@127.0.0.1:5432/somedatabase >> server/.env`  
5. `npm run start:dev`
