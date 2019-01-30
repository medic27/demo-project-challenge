This is a small project that lets you create surveys from a JSON object. It has the following features
1. Generates a URL that can be shared with respondents to answer the survey
2. Respondents can answer this survey and the results will be saved constantly / automatically (via syncing with localStorage)
3. Has a page of the list of surveys that were answered 
4. Has read-only mode of answered surveys

Instructions to get it running

Get posgresql (https://postgresapp.com/) if you don't already have it. Regarding step 4, if you are using postgresapp, it defaults to port 5432, no password, and the same username as your logged in computer profile.

1. `npm install`
2. `echo DATABASE_URL=postgres://yourusername:yourpassword@127.0.0.1:5432/somedatabase >> server/.env`
3. `npm run start:dev`
4. Go to `localhost:3000`
5. List of respondents at `localhost:3000/respondents`

Some of the tech used:
- Create React App in folder react-ui
- Express API backend with request logging in folder server
- Postgres database access with pg-promise
- Database setup and migration with postgrator
- HTTPS only when deployed to Heroku
