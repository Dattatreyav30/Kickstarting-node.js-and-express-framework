const path = require('path');
const rootDir = require('../helpers/path');

exports.contact = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'form.html'))
}

exports.contactSucess = (req, res, next) => {
    res.send('<h1>form submitted successfully</h1>')
}

exports.get404 = (req, res, next) => {
    res.status(404).sendFile(path.join(rootDir,  'views', 'pagenotFound.html'));
  }