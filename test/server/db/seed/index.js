//load db and all tables
const db = require('../../../../server/models');

//load seed data
const UserSeed = require('./user.js');
const CrewSeed = require('./crew.js');
const TaskSeed = require('./task.js');
const RewardSeed = require('./reward.js');
const UserCrewSeed = require('./user_crew.js');
const UserTaskSeed = require('./user_task.js');

module.exports = function() {
  return db.sequelize.drop()
    .then(() => { return db.sequelize.sync(); })
    .then(() => { return db.user.bulkCreate(UserSeed); })
    .then(() => { return db.crew.bulkCreate(CrewSeed); })
    .then(() => { return db.task.bulkCreate(TaskSeed); })
    .then(() => { return db.reward.bulkCreate(RewardSeed); })
    .then(() => { return db.user_crew.bulkCreate(UserCrewSeed); })
    .then(() => { return db.user_task.bulkCreate(UserTaskSeed); })
    .catch(err => { console.log('Database did not sync: ', err); });
};