import { Notes } from "./model/Notes";
import { Task } from "./model/Task";
import { Todolist } from "./model/ToDoList";
import { User } from "./model/User";

//Notes => User
User.hasMany(Notes,{onDelete:'CASCADE', onUpdate: 'CASCADE'});
Notes.belongsTo(User, {foreignKey:'userId', as: 'users'})

//ToDolist => User
User.hasMany(Todolist, {onDelete: 'CASCADE', onUpdate:'CASCADE'});
Todolist.belongsTo(User,{foreignKey:'userId', as: 'users'})

//tasks => Todolist
Todolist.hasMany(Task,{onDelete:'CASCADE', onUpdate:'CASCADE'});
Task.belongsTo(Todolist,{foreignKey:'listId', as: 'list'})
export {Notes, User}