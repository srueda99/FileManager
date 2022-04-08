# File Manager in Nodejs

## Overview
This application was build on *Nodejs* as a backend and works with a rendered frontend in *Handlebars* and stylized with *Bootstrap* and a css stylesheet. The Nodejs API receives a file and uploads it to the choosen *AWS S3 bucket*, you can also delete an object of the bucket and download an object from the bucket; the AWS profile is declared as environment variables and it has to be a IAM CLI user with limited S3 permissions.

## Deployment
This repository has 4 branches, the first branch is called **prev** and it runs a CI/CD with a SSH connection to set up the full environment for our application in the destination server.

The second branch is the **dev** branch, it contains the full development version of our app, all the changes in the code are made here first. In this branch we also have a CI/CD to deploy this development version on the server (to /usr/app/dev).

The third branch is **stg**, which deploys the stage version of the app in the /usr/app/stg folder, stage version is used to test the app as if it were a production version. The CI/CD runs every time we make a pull request to this branch.

The last brach is the **main** branch, here we have the final and production version of our application, this branch uses a CI/CD to deploy the production code in the server at /usr/app/prod folder, the pipeline runs when we make a pull request to this branch.

## Programs and libraries
- NodeJS
- Bootstrap
- HTML, CSS, JS
- Express
- AWS-SDK
- Cors
- Handlebars
- Dotenv