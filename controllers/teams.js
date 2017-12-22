var express = require('express');
var fs = require('fs');
var teamService = require('../models/teamService');
var router = express.Router();

// var db = require('./models');

router.get('/', function(req, res) {
  var teams = teamService.allTeams();
  res.render('teams/index', { teams: teams });
});

router.delete('/:name', function(req,res){
	console.log("Deleted route name = ", req.params.name);
	teamService.deleteTeam(req.params.name);
	res.send();
	});

// router.delete('/:id', function(req,res){
// 	console.log('Delete route', req.params.id);
// 	teams.destroy({
// 		where: { id: req.params.id }
// 	}).then(function(deleted){
// 		console.log('deleted = ', deleted);
// 		res.send('sucess');
// 	}).catch(function(err){
// 		console.log('An error happened', err);
// 		res.send('fail');
// 	})
// });


router.post('/', function(req, res) {
  teamService.addTeam(req.body);

  res.redirect('/teams');
});

router.get('/new', function(req, res) {
  res.render('teams/new');
});

router.get('/:name', function(req, res) {
  // search for the team name in all the teams.
  var team = teamService.getTeam(req.params.name);

  res.render('teams/show', { team: team });
});

module.exports = router;
