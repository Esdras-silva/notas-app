import { Notes } from "./model/Notes";
import { User } from "./model/User";

User.hasMany(Notes,{onDelete:'CASCADE', onUpdate: 'CASCADE'});
Notes.belongsTo(User, {foreignKey:'userId', as: 'users'})

export {Notes, User}