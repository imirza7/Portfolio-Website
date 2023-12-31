var express = require('express');
var router = express.Router();
// const app = express();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});
router.get('/project', function(req, res, next) {
  res.render('project', { title: 'Express' });
});
router.get('/service', function(req, res, next) {
  res.render('service', { title: 'Express' });
});
