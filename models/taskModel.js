const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Asegúrate de tener configurada la conexión con Sequelize

const Task = sequelize.define('Task', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  state_completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  status_available: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  priority: {
    type: DataTypes.STRING,
    defaultValue: 'normal',
  },
});

module.exports = Task;