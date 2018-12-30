Hi, hopefully these instructions are suffient to get it running, if not, please don't hesistate to ask me.

Get posgresql (https://postgresapp.com/) if you don't already have it. Regarding step 4, if you are using postgresapp, it defaults to port 5432, no password, and the same username as your logged in computer profile.

1. `npm install`
2. `echo DATABASE_URL=postgres://yourusername:yourpassword@127.0.0.1:5432/somedatabase >> server/.env`
3. `npm run start:dev`
4. Go to `localhost:3000`
5. List of respondents at `localhost:3000/respondents`

I didn't have enough time to get it polished or add tests unfortunately. There are also a ton of things that can be refactored that didn't happen due to time constraints. The UI is very simple, I chose to go with localStorage for storing answers continuously. I didn't use typescript or flow but definitely would have if i had more time.

Some tech used:
NPM scripts for local development and Heroku deployments
Create React App in folder react-ui
Express API backend with request logging in folder server
Postgres database access with pg-promise
Database setup and migration with postgrator
HTTPS only when deployed to Heroku
