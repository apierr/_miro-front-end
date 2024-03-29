class Client {
    constructor(global_wb) {
        const sr = new SheetReader(global_wb);
        const typeA = new TypeAdapter(sr.getDataFrameType());
        const xhttp = new HttpRequest(typeA.getDfType());
        $.when( xhttp.acceptedPlot()).then(
            function success (data){
                // TODO in backend part you can output just the string or json
                const acceptedPlot = data.slice(1,-1).split(',')
                new PlotWriter(sr.getSequences(), acceptedPlot);
            },
            function error ( data, textStatus, jqXHR ){
                alert('error', textStatus);
            }
        );
    }
}
