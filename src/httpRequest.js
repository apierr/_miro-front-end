class HttpRequest {
    constructor(dfType) {
        this.dfType = dfType;
        this.miroUrl = 'http://localhost:8080/miro-api';
    }

    acceptedPlot() {
        return $.ajax( {
            url: 'http://localhost:8080/miro-api/acceptedPlot/N+3P' 
        });
    }
}
