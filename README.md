
# Gitgazers

Gitgazers is an MIT Licensed Github explorer that uses uses React, Redux and Apollo to view repos from people.

Gitgazers is built upon the excellent [ReactQL](https://reactql.org/) starter kit. I've used this particular starter kit over coding my own webpack configuration because:

1. This starter kit is exceptionally well documented and maintained
2. It uses the latest and best practises in the industry
3. It saves me time from having to reinvent the wheel specifically for this project
4. I've used this starter kit in production before and have contributed contributions to this kit via issues and pull requests that have been either resolved or accepted.
5. I have heavily customised the internal kit code for many many of my other projects so I know the file structure and the way it works inside out. Custom building a solution would honestly just create something that is pretty much similar to this

## Minimum Configuration Requirements

A .env file containing your access token for github. 

# How to run

If you have docker installed, all you need to do is run `yarn build` and then  `docker-compose up` and then navigate to port 4000 on the IP you have configured docker to.

# Non Docker Installation Instructions

You will need  

1. A Unix based machine. I've built this on Mac OS and while I'm certain this will work on any Unix machine, I cannot guarantee the same for windows.
2. Node >= 8 or greater and npm >= 5

Run `yarn install` or `npm install` and install the node modules and then press `yarn start` to start the development server. Make sure you have your access token otherwise this project will not work.

This project is fairly bare bones. Extend it as you please. 

Testing is done via Jest and Enzyme and can be run by running `yarn test`  



