module.exports = (sequelize, DataTypes) => {
  const SurgeriesModel = sequelize.define('Surgeries', {
    surgery_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    specialty: DataTypes.STRING,
    doctor: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'Surgeries',
    underscored: true,
  });

  return SurgeriesModel;
};