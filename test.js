describe('Our application', function () {

    it('This is a simple unit test', function (done) {

        if (5 == 5) {
            done();
        } else {
            done(new Error("Not sure what's happened."));
        }

    });

});