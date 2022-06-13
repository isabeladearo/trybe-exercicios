module.exports = (sequelize, DataTypes) => {
  const PatientsModel = sequelize.define('Patients', {
    patient_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    fullname: DataTypes.STRING,
    plan_id: { type: DataTypes.INTEGER, foreignKey: true },
  },
  {
    timestamps: false,
    tableName: 'Patients',
    underscored: true,
  });

  PatientsModel.associate = (models) => {
    PatientsModel.belongsTo(models.Plans,
      { foreignKey: 'plan_id', as: 'plan' });
  };

  return PatientsModel;
};