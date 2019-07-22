class LinePlot {
    constructor(sequences, acceptedPlot) {
        this.ctx = document.getElementById('myChart').getContext('2d');
        this.sequences = sequences;
        this.acceptedPlot = acceptedPlot;
        this.setChart();
        console.log(this.sequences, '\n', this.acceptedPlot);
    }

    getSequences(type){
        return this.sequences.filter(sequence => sequence[0] === type);
    }

    getChartObject() {
        var chartObject = {
            type: 'line',
            data: {
                datasets: []
            },
            options: {}
        }
        chartObject.data.labels = this.getSequences('d')[0].slice(2);

        this.getSequences('n').forEach(function(sequence) {
            chartObject.data.datasets.push({
                label: sequence[1],
                fill: false,
                borderColor: '#ff0000',
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
