const express=require("express");
const cors = require('cors')


// instanciation
const app=express()
// middleware
app.use(express.json())
app.use(cors())
// Require connectDB
const connectDB = require('./config/connectDB');
  
// connect to DB

connectDB()
//routes
const userRoutes = require('./routes/api/userRoutes')
app.use('/api/users',userRoutes)
const partenaireRoutes = require('./routes/api/partenaireRoutes')
app.use('/api/partenaire',partenaireRoutes)
const commentaireRoutes = require('./routes/api/commentaireRoute')
app.use('/api/commentaire',commentaireRoutes )
const rateRoute = require('./routes/api/rateRoute')
app.use('/api/rate',rateRoute)
// port
const port=5000
app.listen(port,err=> {
    err? console.log(err) : console.log(`server is running on port ${port}`)
})