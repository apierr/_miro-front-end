class Client {
    constructor(global_wb) {
        const sr = new SheetReader(global_wb);
        const xhttp = new HttpRequest(sr.getDataFrameType());
        $.when( xhttp.acceptedPlot()).then(
            function success ( data, textStatus, jqXHR ){
                new PlotWriter(sr.getSequences());
            },
            function error ( data, textStatus, jqXHR ){
                alert(textStatus);
            }
        );
    }
}
