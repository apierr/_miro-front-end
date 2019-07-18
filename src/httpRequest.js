class HttpRequest {
    constructor(dfType) {
        this.dfType = dfType;
        this.miroUrl = 'http://localhost:8080/miro-api';
    }

    acceptedPlot() {
        console.log(this.dfType);
        return $.ajax( {
            url: 'http://localhost:8080/miro-api/acceptedPlot/N+3P' 
        });
    }
}
