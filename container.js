var pm2 = require('pm2');

//yes pm2 can actually be used programmatically
pm2.connect(function(err) {
  pm2._jsonStartOrAction('start', process.cwd() + '/chorus_architecture.json', {
          env : 'env_development'
        }, function(err, data) {
          //should(err).be.null;
          pm2.list(function(err, process_list) {

            console.log(process_list);

            // Disconnect to PM2
            pm2.disconnect(function() { process.exit(0) });
          });
        });
})