const Query = require("../config/query");

const answer = {
  findForPost: function (postId, cb) {
    const query = new Query();

    query.select(
      [
        "replies.ID",
        "username",
        "replies.body"
      ])
      .from(
        {
          name: "posts",
          as: "replies"
        }
      )
      .innerJoin("posts", "posts.ID", "replies.reply_to_id")
      .innerJoin("users", "users.ID", "replies.user_id")
      .go(result => cb(result));
  }
};

module.exports = answer;