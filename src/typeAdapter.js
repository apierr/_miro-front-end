class TypeAdapter {
    constructor(dfType) {
        this.dfType = dfType;
    }

    getDfType() {
        var dfType = this.dfType;
        var pointLimit;
        const pointCount = dfType.match((/(\d{1,})P/))[1];
        const pointRange = [4, 10, 99, 1000, Infinity];

        console.log('pointCount:', pointCount, dfType);

        pointRange.some((e,i) => {
            if(e>pointCount) {pointLimit = i + 1; return true;}
        });
        dfType = dfType.replace(/s/gi, 'C')
        .replace(/n/gi, 'N')
        .replace(/d/gi, 'D');
        dfType = dfType.replace(/(\d{1,})P/,pointLimit+'P');

        return dfType;
    }
}
