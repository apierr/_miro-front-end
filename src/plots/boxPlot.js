class BoxPlot {
    constructor(sequences, acceptedPlot) {
        this.ctx = document.getElementById('myChart').getContext('2d');
        this.sequences = sequences;
        this.acceptedPlot = acceptedPlot;
        this.setChart();
    }

    getSequences(type){
        return this.sequences.filter(sequence => sequence[0] === type);
    }

    randomValues(count, min, max) {
        const delta = max - min;
        return Array.from({ length: count }).map(
          () => Math.random() * delta + min
        );
      }


    getChartObject() {
        const boxplotData = {
            labels: ["A", "B"],
            datasets: [
              {
                label: "Dataset 1",
                borderColor: "red",
                borderWidth: 1,
                outlierRadius: 3,
                itemRadius: 3,
                outlierColor: "#999999",
                data: [[], this.randomValues(200, 0, 100)]
              }
            ]
          };

        var chartObject = {
            type: "boxplot",
            data: boxplotData,
            options: {
              responsive: true,
              legend: {
                position: "top"
              },
              title: {
                display: true,
                text: "Chart.js Box Plot Chart"
              },
              scales: {
                xAxes: [
                  {
                    // Specific to Bar Controller
                    categoryPercentage: 0.9,
                    barPercentage: 0.8
                  }
                ]
              }
            }
          };

        return chartObject;
    }

    setChart() {
        new Chart(this.ctx, this.getChartObject());
    }

}
