class SheetReader {
    constructor(global_wb) {
      this.sheet = global_wb.Sheets.Sheet1;
      new PlotWriter(this.getSequences(this.getColumnName()));
    }

    getRef() {
      return global_wb.Sheets.Sheet1["!ref"];
    }

    getUppercaseLetters() {
      return [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
    }

    getColumnName() {
      // TODO find a more compact way to do it
      const lastColumn = this.getRef().match(/[A-E]/g)[1];
      const uppercaseLetters = this.getUppercaseLetters()
      const lastIndex = uppercaseLetters.indexOf(lastColumn) + 1;
      return uppercaseLetters.slice(0, lastIndex);
    }

    getPointsCount() {
      return this.getRef().match((/\d/g))[1]-1;
    }

    getColumnType(columnName) {
      return this.sheet[columnName+'2'].t;
    }

    getSequences(columnNames){
      return columnNames.map(columnName => this.getSequence(columnName));
    }

    getColumnNameAndType(columnName) {
      return this.getColumnType(columnName);
    }

    getSequence(columnName){
      const cells = Object.keys(this.sheet).filter(cell => cell.indexOf(columnName) > -1);
      const columnNameAndType = this.getColumnNameAndType(columnName);
      return [columnNameAndType ].concat(cells.map(key => this.sheet[key].v));
    }
  }
  