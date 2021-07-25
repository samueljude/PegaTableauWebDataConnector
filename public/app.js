

(function () {
  var myConnector = tableau.makeConnector();
  
  
  
  myConnector.getSchema = function (schemaCallback) {
    const pegaCols = [
      {
        id: "Cost",
        dataType: tableau.dataTypeEnum.float,
      },
      {
        id: "CostPerCookie",
        dataType: tableau.dataTypeEnum.float,
      },
      {
        id: "Country",
        dataType: tableau.dataTypeEnum.string,
      },
      {
        id: "Date",
        dataType: tableau.dataTypeEnum.date,
      },
      {
        id: "MonthName",
        dataType: tableau.dataTypeEnum.string,
      },
      {
        id: "Product",
        dataType: tableau.dataTypeEnum.string,
      },
      {
        id: "Profit",
        dataType: tableau.dataTypeEnum.float,
      },
      {
        id: "Revenue",
        dataType: tableau.dataTypeEnum.float,
      },
      {
        id: "RevenuePerCookie",
        dataType: tableau.dataTypeEnum.float,
      },
      {
        id: "UnitsSold",
        dataType: tableau.dataTypeEnum.int,
      },
      {
        id: "Year",
        dataType: tableau.dataTypeEnum.int,
      },
    ];

    let pegaTableSchema = {
      id: "PegaSales",
      alias: "Pega Sales Analytics Using Tableau",
      columns: pegaCols,
    };

    schemaCallback([pegaTableSchema]);
  };

  myConnector.getData = function (table, doneCallback) {
   
    let tableData = [];
    var i = 0;

    $.getJSON(
      "http://localhost:8090/prweb/api/v1/data/D_SalesDetailsList ",
      function (resp) {
      
        console.log("TEsting print",resp)
    
        // Iterate over the JSON object
        for (i = 0, len = resp.pxResults.length; i < len; i++) {
          tableData.push({
            Cost: resp.pxResults[i].Cost,
            CostPerCookie: resp.pxResults[i].CostPerCookie,
            Country: resp.pxResults[i].Country,
            Date: resp.pxResults[i].Date,
            MonthName: resp.pxResults[i].MonthName,
            Product: resp.pxResults[i].Product,
            Profit: resp.pxResults[i].Profit,
            Revenue: resp.pxResults[i].Revenue,
            RevenuePerCookie: resp.pxResults[i].RevenuePerCookie,
            UnitsSold: resp.pxResults[i].UnitsSold,
            Year: resp.pxResults[i].Year,
            
          });
        }
        table.appendRows(tableData);
        doneCallback();
      }
    );
  };

  tableau.registerConnector(myConnector);
})();

document.querySelector("#getData").addEventListener("click", getData);

function getData() {
  tableau.connectionName = "Pega Sales Analytics";
  


  
  tableau.submit();
}



