class HttpRequest {
    constructor(dfType) {
        this.xhttp = new XMLHttpRequest();
        this.dfType = dfType;
        this.miroUrl = 'http://localhost:8080/miro-api';
        if (!this.xhttp) {
            alert('Giving up :( Cannot create an XMLHTTP instance');
            return false;
        } else {
            this.acceptedPlot();
        }
    }

    acceptedPlot() {
        this.xhttp.onreadystatechange = () => { 
            if (this.xhttp.readyState === XMLHttpRequest.DONE) {
            if (this.xhttp.status === 200) {
                console.log(this.xhttp.responseText);
            } else {
                alert('There was a problem with the request.');
            }
            }
        };
        console.log(this.dfType);
        this.xhttp.open('GET', 'http://localhost:8080/miro-api/acceptedPlot/N+3P');
        this.xhttp.send();
    }
}