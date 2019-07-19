class PiePlot {
    constructor(sequences, acceptedPlot) {
        this.ctx = document.getElementById('myChart').getContext('2d');
        this.sequences = sequences;
        this.acceptedPlot = acceptedPlot;
        this.setChart();
    }

    getSequences(type){
        return this.sequences.filter(sequence => sequence[0] === type);
    }

    getChartObject() {
        var chartObject = {
            type: 'pie',
            data: {
                datasets: []
            },
            options: {}
        }
        chartObject.data.labels = this.getSequences('s')[0].slice(2);

        this.getSequences('n').forEach(function(sequence) {
            chartObject.data.datasets.push({
                label: sequence[1],
                borderWidth: 1,
                data: sequence.slice(2)
            })
        } );

        return chartObject;
    }

    setChart() {
        new Chart(this.ctx, this.getChartObject());
    }

}
