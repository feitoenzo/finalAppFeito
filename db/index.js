// funciones para sq lite funcione corrrectamente

import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase("adress.db")



export const init = () => {
    
    const promise = new Promise ((resolve, reject) => {
        db.transaction (tx=> {
            tx.executeSql("create table if not exists address(id integer primary key not null, image text not null, adress text not null, lat text not null, lng text not null)",
            [],
            ()=> {
                resolve();
            },
            (_, err) => {
            reject(err)
            }
            )
        })
    })
    return promise
}

export const insertAddress = (title, image, address, lat, lng)
