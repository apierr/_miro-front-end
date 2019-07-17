class SheetReader {
    constructor(global_wb) {
      this.sheet = global_wb.Sheets.Sheet1
      console.log(this.getColumnName());
      console.log(this.getPointsCount());
      console.log(this.getColumnType());
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

    getColumnType() {
      this.getColumnName().forEach(function(element) {
        console.log(element, global_wb.Sheets.Sheet1[element+'2'].t);
      })
    }
  }