module.exports = (sequelize, _DataTypes) => {
  const PatientSurgeriesModel = sequelize.define('Patient_surgeries', {},
  {
    timestamps: false,
    tableName: 'Patient_surgeries',
    underscored: true,
  });

  PatientSurgeriesModel.associate = (models) => {
    models.Surgeries.belongsToMany(models.Patients, {
      as: 'patients',
      through: PatientSurgeriesModel,
      foreignKey: 'surgery_id',
      otherKey: 'patient_id',
    });
    models.Patients.belongsToMany(models.Surgeries, {
      as: 'surgeries',
      through: PatientSurgeriesModel,
      foreignKey: 'patient_id',
      otherKey: 'surgery_id',
    });
  };

  return PatientSurgeriesModel;
};