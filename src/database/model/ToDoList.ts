import { DataTypes } from "sequelize";
import { db } from "../db";

export const Todolist = db.define('list', {
    
    id:{
        type:DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    userId:{
        type: DataTypes.UUID,
        references:{
            model:'users',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }
    
})