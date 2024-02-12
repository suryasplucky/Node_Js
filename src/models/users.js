const { DataTypes } = require("sequelize");

module.exports = function (sequelize) {
  return sequelize.define(
    "users", // Change table name to match MySQL schema
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      firstname: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      role_id: {
        type: DataTypes.INTEGER,
        allowNull: true, // Adjust as per your schema
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
      },
      contact_number: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      email_verified_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      otp: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      remember_token: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      profile_image: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      dob: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      address: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      city: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      zipcode: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      country: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      state: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      how_did_you_hear_aboutus: {
        type: DataTypes.STRING(250),
        allowNull: true,
      },
      highest_education_level: {
        type: DataTypes.STRING(250),
        allowNull: true,
      },
      seminar: {
        type: DataTypes.STRING(250),
        allowNull: true,
      },
      biomagnetism_interest: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      something_fun_to_know: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      guidebook: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      is_course_purchased: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false, // Adjust default value as per your schema
      },
      is_notice_enabled: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false, // Adjust default value as per your schema
      },
    },
    {
      tableName: "users", // Change table name to match MySQL schema
      timestamps: false, // Adjust as per your schema
    }
  );
};
