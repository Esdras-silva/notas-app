import { Notes } from "./Notes";
import { User } from "./User";

User.hasMany(Notes,{onDelete:'CASCADE', onUpdate: 'CASCADE'});
Notes.belongsTo(User, {foreignKey:'userId', as: 'users'})

export {Notes, User}