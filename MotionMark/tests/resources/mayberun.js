
function maybeRun() {
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
}

window.addEventListener("load", function() { maybeRun(); });