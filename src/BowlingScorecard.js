'use strict;'

var BowlingScorecard = function() {

  this.thisFramePins = [];


};

BowlingScorecard.prototype.latestRollOutcome = function(number) {
  return number;

};

BowlingScorecard.prototype.latestRollRecord = function(number) {
  this.thisFramePins.push(number);

};

BowlingScorecard.prototype.thisFrameTotalScore = function() {
  return this.thisFramePins.reduce((a, x) => a + x);

};
