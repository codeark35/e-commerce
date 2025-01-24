import { Table, Column, Model, DataType, HasMany } from "sequelize-typescript";
import { Product } from "./product";

@Table({
  tableName: "categories",
  timestamps: true,
  modelName: "Category",
})
export class Category extends Model<Category> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  })
  description!: string;

  @HasMany(() => Product)
  products!: Product[];
}
