var config = {};

config.apiKey = "FF633663BC3E62DFB5D8140FA82EFC61";

// can technically use api key here as well
// since this is shipped to the browser using a read only query key is safer
config.queryKey = "";

config.serviceURL = "https://mk-restaurant-finder.search.windows.net";

config.dataSourceName = "mk-sql-database";

config.indexerName ="sql-import-data-daily";

config.indexName = "searchrestaurants";

config.apiVersion = "2016-09-01";

config.connectionString = "Server=tcp:msfinalprojectsqlserver.database.windows.net,1433;Initial Catalog=restaurantdatabasename;Persist Security Info=False;User ID={your_username};Password={your_password};MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";

config.tableName = "restaurantdatacollection";

config.dataSourceType = "azuresql"; 

config.maxFailedItems = 10;

config.maxFailedItemsPerBatch = 5;

config.base64EncodeKeys = false;

module.exports = config;
