const bodyParser = require('body-parser');

module.exports = function(req, res, next) {
  bodyParser.json()(req, res, (err) => {
    if (err) {
      console.error('Erreur lors de l\'analyse du corps de la requête:', err);
    } else {
      console.log('Corps de la requête:', req.body);
    }
    next();
  });
};
