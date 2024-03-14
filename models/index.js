const Post = require('./Project');
const User = require('./User');
const Comment = require('./Com');




Post.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "SET NULL"
});


Comment.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "SET NULL"
});


Post.hasMany(Comment, {
    foreignKey: "post_id",
    onDelete: 'CASCADE'
});

module.exports = { User, Post, Comment };