(async function () {
  const excel = require("exceljs");
  const fs = require("fs");
  const workbook = new excel.Workbook();
  // use readFile for testing purpose
  // await workbook.xlsx.load(objDescExcel.buffer);
  await workbook.xlsx.readFile("./1.xlsx");
  let jsonData = [];
  workbook.worksheets.forEach(function (sheet) {
    // read first row as data keys
    let firstRow = sheet.getRow(1);
    if (!firstRow.cellCount) return;
    let keys = firstRow.values;
    sheet.eachRow((row, rowNumber) => {
      if (rowNumber == 1) return;
      let values = row.values;
      let obj = {};
      for (let i = 1; i < keys.length; i++) {
        obj[keys[i]] = values[i];
      }
      jsonData.push(obj);
    });
  });
  console.log(jsonData);

  const txData = [];
  for (i = 0; i < jsonData.length; i++) {
    txData.push({
      "@type": "/cosmos.bank.v1beta1.MsgSend",
      from_address: "osmo1lmxrexaxuc7ealq4wqdgzrczajhhrenrhgl9q6",
      to_address: jsonData[i].to_address,
      amount: [{ denom: "uosmo", amount: jsonData[i].amount.toString() }],
    });
  }

  const json = JSON.stringify(txData);
  fs.writeFile("1.json", json, "utf8", () => {});
})();
