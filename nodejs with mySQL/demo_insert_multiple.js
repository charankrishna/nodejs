var mysql = require('mysql');

var con = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"",
	database:"mydb"
});

con.connect(function(err){
	if (err) throw err;
	console.log("Connected!");
	var sql= "INSERT INTO customers(name,address)VALUES ?";
	var values = [
	['paul','highway 23'],
	['peter','beach 23'],
	['krishna', 'kondapur 23'],
	['Hannah', 'Mountain 21'],
    ['Michael', 'Valley 345'],
    ['Sandy', 'Ocean blvd 2'],
    ['Betty', 'Green Grass 1'],
    ['Richard', 'Sky st 331'],
    ['Susan', 'One way 98'],
    ['Vicky', 'Yellow Garden 2'],
    ['Ben', 'Park Lane 38'],
    ['William', 'Central st 954'],
    ['Chuck', 'Main Road 989'],
    ['Viola', 'Sideway 1633']
	];
	con.query(sql,[values],function(err,result){
		if (err) throw err; 
		console.log("No of record inserted" + result.affectedRows);
	});
});