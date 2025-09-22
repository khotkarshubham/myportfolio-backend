const app = require('./app');
const { sequelize } = require('./models');
require('dotenv').config();

const PORT = process.env.PORT || 4000;
(async ()=>{
  try{
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, ()=>console.log('Server listening on', PORT));
  }catch(err){
    console.error(err);
    process.exit(1);
  }
})();
