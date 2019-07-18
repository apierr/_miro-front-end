class PlotWriter {
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

    isDate() { 
        return this.getSequences('d').length > 0;
    }

    getChartObject() {
        var chartObject = {
            // The type of chart we want to create
            // TODO
            type: this.isDate() ? 'line' : 'bar',
            // The data for our dataset
            data: {
                datasets: []
            },
            // Configuration options go here
            options: {}
        }
        // TODO
        chartObject.data.labels = this.isDate() ? this.getSequences('d')[0].slice(2) : this.getSequences('s')[0].slice(2);

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
