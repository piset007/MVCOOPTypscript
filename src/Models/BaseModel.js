export class BaseModel {

    constructor(tableName) {
        this.tableName = tableName;
    }
    
    static list(tableName) {
        return `SELECT * FROM ${tableName}`;
    }
    
    static getById(tableName) {
        return `SELECT * FROM ${tableName} WHERE id = ?`;
    }

    static create(tableName, columns) {
        const columnNames = columns.join(', ');
        const placeholders = columns.map(() => '?').join(', ');
        return `INSERT INTO ${tableName} (${columnNames}) VALUES (${placeholders})`;
    }
    
    static update(tableName, columns) {
        const setClause = columns.map(col => `${col} = ?`).join(', ');
        return `UPDATE ${tableName} SET ${setClause} WHERE id = ?`;
    }
    
    static delete(tableName) {
        return `DELETE FROM ${tableName} WHERE id = ?`;
    }
}
