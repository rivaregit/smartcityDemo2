import { Sequelize } from "sequelize";

// const sequelize = new Sequelize('realstate', 'root', '1234', {
//     host: 'localhost',
//     dialect: '  mysql'
// });

const sequelize= new Sequelize('db_aa33a1_real', 'aa33a1_real', 'real2024', {
        host:'mysql5046.site4now.net',
        dialect: 'mysql',
        dialectOptions: {
            connectTimeout:100000
        },
        define: {
            timestamps: false
        },
        pool: {
            max: 25,
            min: 0,
            idle: 10000
        },
    }); 

    // const sequelize= new Sequelize('realngur_realstate', 'realngur_realstate_user','realState2024',  {
    //    host:'localhost',
    //     dialect: 'mysql'
    // }); 
    
export default sequelize;