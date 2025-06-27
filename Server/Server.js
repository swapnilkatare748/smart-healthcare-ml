const app = require('./Src/app.js'); // Corrected the file extension

const PORT = process.env.PORT || 8001;




app.listen(PORT,()=>{
    console.log(`Server is run on the http://localhost:${PORT}`);
});