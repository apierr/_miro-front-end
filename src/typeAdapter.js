class TypeAdapter {
    constructor(dfType) {
        this.dfType = dfType;
    }

    getDfType() {
        var dfType = this.dfType;
        dfType = dfType.replace(/s/gi, 'C')
            .replace(/n/gi, 'N')
            .replace(/d/gi, 'D');

        const pointCount = dfType.match((/(\d)P/))[1];
        const pointRange = [3, 5, 8, 13, 21, 100, 1000, 10000];
        var pointLimit;
        pointRange.some((e,i) => {if(e>pointCount) {pointLimit = i; return true;}});
        dfType = dfType.replace(/(\d{1,})P/,pointLimit+'P');

        return dfType;
    }
}
