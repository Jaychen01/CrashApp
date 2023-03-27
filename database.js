import mysql from 'mysql2'

import dotenv from 'dotenv'

dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

// export async function getCrashes() {
//     var [rows] = await pool.query(`select * from crash`)
//     return rows
// }
//const crashes = Object.assign({}, rows)
// rows.forEach(crash => {
//     const cra = new CrashModel({
//         reportnumber: crash[0],
//         geometry: {
//             type:
//                 coordinates: [
//                     crash[12],
//                     crash[11]
//                 ]
//         }
//     });



//     return 
//let result = (object)

//return result

// {
//     "type": "FeatureCollection",
//     "features": [{
//     "type": "Feature",
//     "properties": {},
//     "geometry": {
//     "type": "Point",
//     "coordinates": [
//     -76.53063297271729,
//     39.18174077994108
//     ]
//     }
//     }]

export async function getCrashes() {
    const [rows] = await pool.query(`
    select * 
    from crash`
    )
    return rows
}

export async function getCrash(id) {
    const [rows] = await pool.query(`
    select * 
    from crash
    where report_number = ?
    `, [id])
    return rows[0]
}

const crash = await getCrash(5000001)

//console.log(crash)