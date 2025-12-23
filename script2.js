(async function () {
  const excel = require("exceljs");
  const fs = require("fs");
  const workbook = new excel.Workbook();
  // use readFile for testing purpose
  // await workbook.xlsx.load(objDescExcel.buffer);
  const worksheet = workbook.addWorksheet("Sheet 3");
  worksheet.columns = [
    { header: "delegator_address", key: "delegator_address", width: 10 },
    { header: "amount", key: "amount", width: 10 },
  ];

  const txs = [];
  let output = [];

  for (i = 0; i < txs.length; i++) {
    if (parseInt(txs[i].balance.amount) >= 50000000) {
      output.push({
        delegator_address: txs[i].delegation.delegator_address,
        amount: txs[i].balance.amount,
      });

      worksheet.addRow({
        delegator_address: txs[i].delegation.delegator_address,
        amount: txs[i].balance.amount,
      });
    }
  }

  workbook.xlsx
    .writeFile("./delegators6.xlsx")
    .then(() => console.log("File saved!"));

  console.log(output, output);
})();
