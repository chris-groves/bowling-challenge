describe('BowlingScorecard', function() {

  var scorecard;

  beforeEach(function(){
    scorecard = new BowlingScorecard();
});

  it('receives notification 1 pin has been knocked down on the first roll', function() {
    expect(scorecard.latestRollOutcome(1)).toEqual(1);
});

});
