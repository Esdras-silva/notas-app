import { DataTypes } from "sequelize";
import { db } from "../db";

export const Task = db.define('task',{
    id:{
        type:DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    listId:{
        type: DataTypes.UUID,
        references:{
            model:'list',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    active:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
})