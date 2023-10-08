var express = require('express');
var router = express.Router();
// const app = express();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About me' });
});
router.get('/project', function(req, res, next) {
  res.render('project', { title: 'Project' });
});
router.get('/service', function(req, res, next) {
  res.render('service', { title: 'Service' });
});
router.get("/partials/header", function (req, res, next) {
  res.render("header", { title: "Header" });
});
router.get("/partials/footer", function (req, res, next) {
  res.render("footer", { title: "footer" });
});

module.exports = router;
