var express = require('express')
var router = express.Router();
var database = require('./database')

router.get("/", function (request, response, next) {
    var query = "select *from mark";
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
    response.render('empdata',
        {title: 'Data Insertion',
            action: 'add'});
        }
    )

router.post("/add_sample", function(request,response,next){
    var name=request.body.name;
    var age=request.body.age;

    var query=`insert into mark(name,age)values('${name}','${age}')`;
    database.query(query, function(error, data){
        if(error){
            throw error;
        }
        else{
            response.redirect('/employee')
        }
    })
})

router.get('edit/:name', function(request,response,next){
    var id=request.params.name;
    var query=`select * from mark where name='${id}'`;
    database.query(query, function(error, data){
        response.render('employee',{title: 'Edit data',
            action: 'edit',
            employeedata: data.recordset[0]

        })
    })
})


module.exports = router;