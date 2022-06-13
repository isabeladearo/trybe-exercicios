module.exports = (sequelize, DataTypes) => {
  const PlansModel = sequelize.define('Plans', {
    plan_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    coverage: DataTypes.STRING,
    price: DataTypes.DOUBLE,
  },
  {
    timestamps: false,
    tableName: 'Plans',
    underscored: true,
  });

  PlansModel.associate = (models) => {
    PlansModel.hasMany(models.Patients,
      { foreignKey: 'plan_id', as: 'patients' });
  };

  return PlansModel;
};