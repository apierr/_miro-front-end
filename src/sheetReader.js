class SheetReader {
    constructor(global_wb) {
      this.sheet = global_wb.Sheets.Sheet1;
    }

    getRef() {
      return global_wb.Sheets.Sheet1["!ref"];
    }

    getUppercaseLetters() {
      return [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
    }

    getColumnNames() {
      // TODO find a more compact way to do it
      const lastColumn = this.getRef().match(/[A-Z]/g)[1];
      const uppercaseLetters = this.getUppercaseLetters()
      const lastIndex = uppercaseLetters.indexOf(lastColumn) + 1;
      return uppercaseLetters.slice(0, lastIndex);
    }

    getPointsCount() {
      return this.getRef().match((/\d{1,}/g))[1]-1 + 'P';
    }

    //TODO you should use https://docs.sheetjs.com/#dates
    isDate(numericalValue){
      var dateReg = /\d{1,4}([./-])\d{1,2}\1\d{1,4}/;
      return numericalValue.match(dateReg) ? 'd' : 'n';
    }

    getColumnTypes() {
      return this.getColumnNames().map(columnName => this.getColumnType(columnName));
    }

    getDataFrameType() {
      const colTypes = this.getColumnTypes();
      var dfType = '';
      ['n', 's', 'd'].forEach(function(e) {
        dfType += colTypes.filter(colType => colType == e).length + e + '+';
      });
      dfType = dfType.replace(/(0[a-z])/,'').replace(/\+\+/,'\+');
      return dfType.slice(0, -1)+ '+' + this.getPointsCount();
    }

    getColumnType(columnName) {
      // TODO 
      console.log('columnName:', columnName);
      window.miro_sheet = this.sheet;
      const columnType = this.sheet[columnName+'2'].t;
      const columnValue = this.sheet[columnName+'2'].w;
      return columnType === 'n' ? this.isDate(columnValue) : columnType ;
    }

    getSequences(){
      const columnNames = this.getColumnNames();
      return columnNames.map(columnName => this.getSequence(columnName));
    }

    getColumnNameAndType(columnName) {
      return this.getColumnType(columnName);
    }

    getSequence(columnName){
      const cells = Object.keys(this.sheet).filter(cell => cell.indexOf(columnName) > -1);
      const columnNameAndType = this.getColumnNameAndType(columnName);
      return [columnNameAndType ].concat(cells.map(key => this.sheet[key].w));
    }
  }
  