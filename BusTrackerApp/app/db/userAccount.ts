import {
    enablePromise,
    openDatabase,
    SQLiteDatabase
  } from "react-native-sqlite-storage";
  import { connectToDatabase, createTables, getTableNames, removeTable } from '../db/db';


export const addAccount = async (db: SQLiteDatabase, account: Account) => {
    const insertQuery = `
     INSERT INTO Contacts (username, password)
     VALUES (?, ?)
   `
    const values = [
      account.username,
      account.password,
    ]
    try {
      return db.executeSql(insertQuery, values)
    } catch (error) {
      console.error(error)
      throw Error("Failed to add contact")
    }
  }


  export const getAccount = async (db: SQLiteDatabase): Promise<Account[]> => {
    try {
      const account: Account[] = []
      const results = await db.executeSql("SELECT * FROM Accounts")
      results?.forEach((result) => {
        for (let index = 0; index < result.rows.length; index++) {
          account.push(result.rows.item(index))
        }
      })
      return account
    } catch (error) {
      console.error(error)
      throw Error("Failed to get Accounts from database")
    }
  }


  export const updateAccount = async (
    db: SQLiteDatabase,
    updatedAccount: Account
  ) => {
    const updateQuery = `
      UPDATE Account
      SET username = ?, password = ?
    `
    const values = [
      updatedAccount.firstName,
      updatedAccount.name,
      updatedAccount.phoneNumber,
      updatedAccount.id,
    ]
    try {
      return db.executeSql(updateQuery, values)
    } catch (error) {
      console.error(error)
      throw Error("Failed to update account")
    }
  }

  export const deleteAccount = async (db: SQLiteDatabase, account: Account) => {
    const deleteQuery = `
      DELETE FROM Accounts
    `
    const values = [account.id]
    try {
      return db.executeSql(deleteQuery, values)
    } catch (error) {
      console.error(error)
      throw Error("Failed to remove contact")
    }
  }