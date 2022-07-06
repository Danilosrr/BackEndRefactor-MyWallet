import connection from "../src/database.js";

async function insertFinancialEvent(id,value,type){
    return connection.query(
    `INSERT INTO "financialEvents" ("userId", "value", "type") VALUES ($1, $2, $3)`,
    [id, value, type]
    );    
}
async function infoFinancialEvent(id){
    return connection.query(
    `SELECT * FROM "financialEvents" WHERE "userId"=$1 ORDER BY "id" DESC`,
    [id]
    );    
} 

const financialRepository = {
    insertFinancialEvent,
    infoFinancialEvent
}

export default financialRepository;