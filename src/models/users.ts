'use strict';
import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../db/database';

export interface UserAttributes {
  id: number;
  username: string;
  email: string;
  password: string;
  src_image: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserCreationAttributes extends Optional<UserAttributes, "id" | "updatedAt" | "src_image"> {

}

export interface UserInstance extends Model<UserAttributes, UserCreationAttributes>, UserAttributes {

}


const Users = sequelize.define<UserInstance>('users', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(128),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  src_image: DataTypes.STRING(128),
  createdAt:{
    type: 'DATETIME',
    allowNull: false
  },
  updatedAt:{
      type: 'DATETIME',
  }
})

export default Users;