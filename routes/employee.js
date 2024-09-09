var express = require('express')
var router = express.Router();
var database = require('./database')

router.get("/", function (request, response, next) {
    var query = "select *from employee order by EmpNo";
    database.query(query, function (error, data) {
        if (error) {
            throw error;
        }
        else {
            response.render('empdata', {
                title: 'Data Display',
                action: 'hai', 
                employeedata: data.recordset
            });
        }
    })
});

router.get("/add", function (request, response, next) {
    response.send("30265")
})

module.exports = router;