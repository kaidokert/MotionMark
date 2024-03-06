
window.setTimeout(() => {
    console.log("maybe run ?");
    var benchmark = new window.benchmarkClass({

        "complexity": "100",
        "configuration": "medium",
        "controller": "fixed",
        "display": "minimal",
        "fill": "gradient",
        "first-frame-minimum-length": 0,
        "frame-rate": 120,
        "kalman-measurement-error": 4,
        "kalman-process-error": 1,
        "particleHeight": "50",
        "particleWidth": "50",
        "shape": "circle",
        "system-frame-rate": 120,
        "test-interval": 10,
        "tiles": "big",
        "time-measurement": "performance",
        "warmup-frame-count": 30,
        "warmup-length": 2000,

    });
    console.log(benchmark)
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
        // motionmark.js: calculateScore(testData)
    });
}, 10)