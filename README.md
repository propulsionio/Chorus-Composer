git clone --recursive https://github.com/propulsionio/Chorus-Composer

npm install

npm install in each downloaded project

install secret folder in each project

install secret.js  from ChorusDeployer into chorus-dashboard-admin

[set up elastic beanstalk client](http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create_deploy_nodejs.sdlc.html)


run application with

node container.js

to see status of applications run 

sudo pm2 status

ensure that pm2 is installed globally -> sudo npm install pm2 -g --unsafe-perm
