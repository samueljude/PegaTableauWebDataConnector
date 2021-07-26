# Pega Sales Web Data Connector

Link Web Data Connector Docs: https://tableau.github.io/webdataconnector/#

Corona Dashboard Dutch Government: https://tableau.github.io/webdataconnector/#

Source data eg : http://localhost:8090/prweb/api/v1/data/D_SalesDetailsList (The source data is now without any authentication,To achieve no Auth in pega API go to Service package -> api and unselect require authentication, if in case you need to use basic auth in your Pega API datasource then ignore these steps)

To use the default Basic Auth for pega API's kindly add the the below Javascript code :

myConnector.init = function(initCallback) {
      tableau.authType = tableau.authTypeEnum.basic;
      initCallback();
  }

Adding the above code tableau will now ask for username and password.

Web Connector Simulator : https://tableau.github.io/webdataconnector/Simulator/

The above source data is used from my Pega API list datapage "D_SalesDetailsList" you can customise as per your need.

My Finished Pega WDC ready to use:https://pega-tableau-web-data-connector-gd6eh3jdl-samueljude.vercel.app/
Note : 
1. paste this in the below search bar when importing in tableau this is direct WDC URL, if used directly in browser wont work.
2. This is WDC is specifically designed for my datatype SalesDetails and includes the name of the fields in this datatype as my tableau schema column headings.

TODO

1. Go to app.js and update the $.getJSON with the url from your PegaAPI or any url which contains your Json Data
2. Download a live server extension in VsCode and open the index.html with live server.
3. Copy the localhost url or (127.0.....) and paste it in the Tableau -> Web data connector -> upper search bar
4. You will see the landing page. Click get data to import the data. Now the Columns of the schema as defined in my app.js  (getSchema) will come as column headings of a table.
5. To load the data click on +sheet and automatically data gets imported.

Please Note : the schema mentioned in the App.js file is according the fields of the data type SalesDetails. Kindly customise as per need.


