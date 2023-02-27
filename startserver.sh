#!/usr/bin/env node

# echo 'Lets Start the server'
# npm run deploy
echo "Trying to run Docker Container"
docker run -d -p 80:3000 testnode