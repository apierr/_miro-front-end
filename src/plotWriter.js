class PlotWriter {
    constructor(sequences, acceptedPlot) {
        console.log('acceptedPlot', acceptedPlot);
        if (acceptedPlot.includes("BarPlot")) {
            new BarPlot(sequences, acceptedPlot);
        }
        if (acceptedPlot.includes("LinePlot")) {
            new LinePlot(sequences, acceptedPlot);
        }
        if (acceptedPlot.includes("PiePlot")) {
            new PiePlot(sequences, acceptedPlot);
        }
    }
}
