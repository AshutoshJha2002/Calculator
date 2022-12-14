const express = require('express');
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html");
});
app.get("/bmicalculator",function(req,res){
  res.sendFile(__dirname+"/bmiCalculator.html");
})
app.post("/bmiCalculator.html",function(req,res){
  var w=parseFloat(req.body.weight);
  var h=parseFloat(req.body.height);
  var result=w/(h*h);
  res.send("Your BMI is :"+result);
})
app.post("/", function (req, res) {

   var num1 = Number(req.body.num1);
   var num2 = Number(req.body.num2);
   var result = num1 + num2;
   res.send("The result of calculation is " + result);
});
app.listen('3000',function(){
  console.log("Server started at port 3000");
})
