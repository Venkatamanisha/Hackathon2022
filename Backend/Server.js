const express=require('express')
const mysql=require('mysql')
var bodyparser=require('body-parser');
const cors=require('cors')
const multer=require('multer');
const path=require('path');


const db=mysql.createPool({
    connectionLimit:100,
    host:"localhost",
    user:"root",
    password:"",
    database:"vishnu",
});

db.getConnection((err)=>{
if(err) throw err
    

else{
    console.log("Successfully connected")
}
});

app=express();
app.use('/images',express.static("images"))
app.use(express.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use(cors());

// app.get("/",(req,res)=>{
//     console.log("server ")
// });

app.get("/report",(req,res)=>{
   // console.log("getting data from db");
    
    db.query('select * from posts ',(err,result)=>{
        if(err) throw err;
            
        
        else{
            console.log(result)
            res.send(result);
        }
    })
})
app.get("/Eventpage",(req,res)=>{
    console.log("getting data from db events");
    const eventname=req.body.eventname;
   
    db.query('select * from posts group by eventname;',(err,result)=>{
        if(err) throw err;
            
        
        else{
            console.log(result)
            res.send(result);
        }
    })
})
app.get("/Student",(req,res)=>{
    
    const eventname=req.body.eventname;
   
    db.query('select * from posts group by category="student";',(err,result)=>{
        if(err) throw err;
            
        
        else{
            console.log(result)
            res.send(result);
        }
    })
})
app.get("/Faculty",(req,res)=>{
    
    
   
    db.query('select * from posts group by category="";',(err,result)=>{
        if(err) throw err;
            
        
        else{
            console.log(result)
            res.send(result);
        }
    })
})
// app.get("/SignUp",(req,res)=>{
//     console.log("getting data from db");
//     db.query('select * from userdata',(err,result)=>{
//         if(err) throw err

app.post("/",(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    const sql="select *  from users where username = ? and  password = ?";
    db.query(sql,[username,password],(err,result,fields)=>{
        if(err) throw err
        

           if(result.length>0){
            res.send({message:"Login Successfully"});
           }else{
            res.send({message:"No user found"});
           }
            
        }
    )
})
app.post("/Admin",(req,res)=>{
    const facultyname=req.body.facultyname;
    const password=req.body.password;
    const sql="select *  from facultydata where facultyname = ? and  password = ?";
    db.query(sql,[facultyname,password],(err,result,fields)=>{
        if(err) throw err
        

           if(result.length > 0){
            res.send({message:"Login Successfully"});
           }else{
            res.send({message:"No user found"});
           }
            
        }
    )
})
// app.post("/Upload",(req,res)=>{
//     const eventName=req.body.eventName;
//     const username=req.body.username;
//     const department=req.body.department;
//     const description=req.body.description;
//     const category=req.body.category;
    
// })
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, "images");
    },
    filename: function (req, file, callback) {
      callback(null, file.originalname);
    },
  });
  const upload = multer({
    storage: storage,
  });
  app.post("/Upload",upload.single("image"), function (req, res) {
    console.log('uploading...')
    const eventname=req.body.eventname;

    const username=req.body.username;
    const department=req.body.department;
    const description=req.body.description;
    const category=req.body.category;
    const insertData = "insert into posts (eventname,username,description,department,category) values(?,?,?,?,?)";
    db.query(insertData, [eventname,username,description,department,category], (err, result) => {
          if (err) throw err;
          else{
            res.send(result);
            
          }
        
      });
    }
  );
app.post("/Imageupload",(req,res)=>{
    if (!req.file) {
        console.log("No file upload");
      } else {
        console.log(req.file.filename);
        const imgsrc = "http://127.0.0.1:8000/images/" + req.file.filename;
        const insertData = "update posts set image=?  where username=1201";
        db.query(insertData, [imgsrc], (err, result) => {
          if (err) throw err;
          console.log("file uploaded");
        });
      }
})
  
// app.delete("/Delete/:Email",(req,res)=>{
//     const Email=req.body.Email;
//     const sqld=`Delete from userdata where userdata.Email=(?)`;
//     db.query(sqld,[Email],(err)=>{
//         if(err) throw err;
        
//     })
// })
// app.put("/update",(req,res)=>{
//     const Email=req.body.Email;
//     const Password=req.body.Password;
//     const squp="update  userdata set Password=? where Email=?"
//     db.query(squp,[Password,Email],(err)=>{
//         if(err) throw err;
        
//     })
// })
// app.post("/Delete",(req,res)=>{
//     const Email=req.body.Email;
    
//     const sql="delete from userdata where userdata.Email=?"
//     db.query(sql,[Email],(err,result,fields)=>{
//         if(err) throw err;
//         else{

//             console.log("successful");
//             res.send(result);
//         }
//     })
// })
// app.post('/Uploadimage',async(req,res)=>{
//     try{
//         let upload=multer({storage:storage}).single('avatar');
//         upload(req,res,function(err){
//             if(!req.file){
//                 return res.send("please select picture")
//             }
//             else if(err instanceof multer.MulterError){
//                 return res.send(err)
//             }
//             else if(err){
//                 return res.send(err)
//             }
//             const imgdata={
//                 image:req.file.filename
//             }
//             const sqli="insert into userdata set ?"
//             db.query(sqli,imgdata,(err,result)=>{
//                 if (err) throw err;
//                 res.send(result)

//             })
            
//         })
//     }catch(err){console.log(err)}
// })
app.listen(8000,()=>{
    console.log("server listening");
});


  
