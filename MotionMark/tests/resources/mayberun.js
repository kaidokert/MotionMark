
function maybeRun() {
    try {
        let qs = Utilities.convertQueryStringToObject(location.search);
        let opts = window.benchmarkController.benchmarkDefaultParameters;
        let conf = {
            "complexity": "50",
            "configuration": "medium",
            "fill": "gradient",
            "particleHeight": "50",
            "particleWidth": "50",
            "shape": "circle",
        };
        Object.assign(opts, conf)
        Object.assign(opts, qs)
        var benchmark = new window.benchmarkClass(opts);
        benchmark.run().then((testData) => {
            console.log("testData", testData);
            var db = new ResultsDashboard(1,
                {
                    "frame-rate" : 120,
                    "system-frame-rate" : 120,
                }
            );
            db.calculateScore(testData);
            console.log("score", JSON.stringify(testData.result));
        });
    } catch(err) {
        console.log('-----------------------ERRR-----------')
        console.log(err)
        console.log('-----------------------STACK-----------')
        console.log(err.stack)
        console.log('-----------------------ERRR-----------')
    }
}

window.addEventListener("load", function() { maybeRun(); });