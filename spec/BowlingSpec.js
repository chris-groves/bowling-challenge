describe('BowlingScorecard', function() {

  var scorecard;

  beforeEach(function(){
    scorecard = new BowlingScorecard();
});

  it('receives notification 1 pin has been knocked down', function() {
    expect(scorecard.latestRollOutcome(1)).toEqual(1);
  });

  it('displays that 1 pin has been knocked down in the first roll in the latest frame', function() {
    scorecard.latestRollRecord(1);
    expect(scorecard.thisFramePins).toEqual([1]);
  });

  it('displays that in this frame, 1 pin has been knocked down in the first roll and 1 pin knocked down in the second roll', function() {
    scorecard.latestRollRecord(1);
    scorecard.latestRollRecord(1);
    expect(scorecard.thisFramePins).toEqual([1,1]);
  });

  it('displays a total score of 2 for the frame', function() {
    scorecard.latestRollRecord(1);
    scorecard.latestRollRecord(1);
    expect(scorecard.thisFrameTotalScore()).toEqual(2);
  });

});
