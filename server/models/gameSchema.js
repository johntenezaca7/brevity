'use strict'; // right?
var mongoose = require('mongoose');
var db = require('../server.js')

var Schema = mongoose.Schema;

var gameSchema = new Schema({
  playerScores: {
    type: Number, 
  }, 

  participants: {
    type: Array,
  },

  leaderboard: {
    type: Array,
  },

  pointWorth: {
    type: Number, 
  },  
  
  pointCost: {
    type: Number, 
  }, 
  // active, completed, 
  status : {
    type : String, 
  }, 

  algorithm : {
    type : String
  }, 
});

mongoose.model('gameSchema', gameSchema);