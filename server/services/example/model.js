module.exports = (app) => {
  const sequelize = app.get('sequelize')
  const { INTEGER, STRING, TEXT } = app.get('DataTypes')

  const example = sequelize.define(
    'example',
    {
      // EVERY TABLE MUST HAVE AN ID
      id: {
        type: INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      slug: {
        type: STRING,
        allowNull: false,
      },
      name: {
        type: STRING,
        allowNull: false,
      },
      description: {
        type: TEXT,
        allowNull: false,
      },
    },
    {
      hooks: {
        beforeCount(options) {
          options.raw = true
        },
      },
    }
  )
  return example
}
