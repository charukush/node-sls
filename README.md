# node-sls
## Create folder
sls create --template aws-nodejs --path node-sls

# create package JSON
  npm init
# to run project offline : use serverless offline
   npm install serverless-offline --save-dev

## endpoints:
  GET - https://q5prsrofpi.execute-api.us-east-1.amazonaws.com/dev/hello
  PUT - https://q5prsrofpi.execute-api.us-east-1.amazonaws.com/dev/content
  GET - https://q5prsrofpi.execute-api.us-east-1.amazonaws.com/dev/content