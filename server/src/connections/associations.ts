/* import { User } from "../models/user";
import { Task } from "../models/task"; */
import { Category } from "../models/category";
import { Product } from "../models/product";



export function setupAssociations() {
  /* User.hasMany(Task, { foreignKey: "userId", sourceKey: "uuid" });
  Task.belongsTo(User, { foreignKey: "userId", targetKey: "uuid" }); */

  Category.hasMany(Product, { foreignKey: "CategoryId", sourceKey: "id" });
  Product.belongsTo(Category, { foreignKey: "CategoryId", targetKey: "id" }); 
  
/*
  Product.hasMany(Inventory, {foreignKey: "productId", sourceKey: "id"});
  Inventory.belongsTo(Product, { foreignKey: "productId", targetKey: "id" }); */

}
