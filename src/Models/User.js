import e from 'express';
import { BaseModel } from './BaseModel.js';
import { db } from '../config/db.js';

export class User extends BaseModel {
    
    constructor(id, name, email) {
        super('users');
        this.id = id;
        this.name = name;
        this.email = email;
    }

    static async getAll() {
        const [rows] = await db.query(BaseModel.list('users'));
        return rows;
    }

    static async getById(id) {
        const [rows] = await db.query(BaseModel.getById('users'), [id]);
        return rows.length ? rows[0] : null;
    }

    static async create(name, email) {
        const [result] = await db.query(
            BaseModel.create('users', ['name', 'email']),
            [name, email]
        );
        return new User(result.insertId, name, email);
    }

    static async update(id, name, email) {
        const [result] = await db.query(
            BaseModel.update('users', ['name', 'email']),
            [name, email, id]
        );
        return result.affectedRows > 0;
    }

    static async delete(id) {
        const [result] = await db.query(
            BaseModel.delete('users'),
            [id]
        );
        return result.affectedRows > 0;
    }

    static async update(id, name, email) {
        const [result] = await db.query(
            BaseModel.update('users', ['name', 'email']),
            [name, email, id]
        );
        if (result.affectedRows === 0) return null;
        return new User(id, name, email);
    }

    static async delete(id) {
        const [result] = await db.query(BaseModel.delete('users'), [id]);
        return result.affectedRows > 0;
    }
}