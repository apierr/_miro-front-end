class PlotWriter {
    constructor() {
        this.ctx = document.getElementById('myChart').getContext('2d');
        this.setChart();
    }
    setChart() {
        new Chart(this.ctx, {
            // The type of chart we want to create
            type: 'line',
        
            // The data for our dataset
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'Dataset 1',
                    borderWidth: 1,
                    data: [
                        14, 24, 23, 23, 12, 12, 5
                    ]
                }, {
                    label: 'Dataset 2',
                    borderWidth: 1,
                    data: [
                        10,23, 23, 13, 22, 12, 12
                    ]
                }]
            },
        
            // Configuration options go here
            options: {}
        });
    }

}

