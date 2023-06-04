const { db } = require("./db");

const getConsumptionHistory = async() => {
    let sql = 'SELECT * FROM consumptionHistory';
    let [rows,fields] = await db.query(sql);
    console.log(rows);
    return rows
};

const postConsumptionHistory = async(userID, date, content, amount, category, secret) => {
    let sql = `
        INSERT INTO consumptionHistory 
        (userID, date, content, amount, category, secret) 
        VALUES
        (${userID}, ${date}, ${content}, ${amount}, ${category}, ${secret}) 
    `
    let [rows] = await db.query(sql);
    console.log(rows); // post시 rows를 찍어보면 입력된 insertId가 나옴, 방금 입력한 내용을 띄울 필요가 있을 떄 사용하면 좋을 듯
}

module.exports = {
    getConsumptionHistory,
    postConsumptionHistory,
}