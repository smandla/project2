const {Comment} = require('../models')

const commentData = [
    {
        user_id: 1,
        plant_id: 1,
        comment_text: "Wow that is such a beautiful plant!",
        voteCount: 1078
    },
    {
        user_id: 1,
        plant_id: 2,
        comment_text: "You should probably stop taking care of plants :)",
        voteCount: 1045
    },
    {
        user_id: 1,
        plant_id: 3,
        comment_text: "The leaves on that are so pretty",
        voteCount: 1062
    },
    {
        user_id: 1,
        plant_id: 4,
        comment_text: "You should get a bigger pot for that one",
        voteCount: 1043
    },
    {
        user_id: 1,
        plant_id: 5,
        comment_text: "I wish I was that plant",
        voteCount: 4564
    },
    {
        user_id: 1,
        plant_id: 6,
        comment_text: "Pretty darn cool",
        voteCount: 1235
    },
    {
        user_id: 2,
        plant_id: 7,
        comment_text: "Wow that is such a beautiful plant!",
        voteCount: 4512
    },
    {
        user_id: 2,
        plant_id: 8,
        comment_text: "You should probably stop taking care of plants :)",
        voteCount: 4561
    },
    {
        user_id: 2,
        plant_id: 9,
        comment_text: "The leaves on that are so pretty",
        voteCount: 4512
    },
    {
        user_id: 2,
        plant_id: 10,
        comment_text: "You should get a bigger pot for that one",
        voteCount: 1452
    },
    {
        user_id: 2,
        plant_id: 11,
        comment_text: "I wish I was that plant",
        voteCount: 4212
    },
    {
        user_id: 2,
        plant_id: 12,
        comment_text: "Pretty darn cool",
        voteCount: 1425
    },
    {
        user_id: 3,
        plant_id: 13,
        comment_text: "Wow that is such a beautiful plant!",
        voteCount: 7864
    },
    {
        user_id: 3,
        plant_id: 14,
        comment_text: "You should probably stop taking care of plants :)",
        voteCount: 4541
    },
    {
        user_id: 3,
        plant_id: 15,
        comment_text: "The leaves on that are so pretty",
        voteCount: 4581
    },
    {
        user_id: 3,
        plant_id: 16,
        comment_text: "You should get a bigger pot for that one",
        voteCount: 4515
    },
    {
        user_id: 3,
        plant_id: 17,
        comment_text: "I wish I was that plant",
        voteCount: 4512
    },
    {
        user_id: 3,
        plant_id: 18,
        comment_text: "Pretty darn cool",
        voteCount: 9863
    },
    {
        user_id: 4,
        plant_id: 19,
        comment_text: "Wow that is such a beautiful plant!",
        voteCount: 3984
    },
    {
        user_id: 4,
        plant_id: 20,
        comment_text: "You should probably stop taking care of plants :)",
        voteCount: 1456
    },
    {
        user_id: 4,
        plant_id: 21,
        comment_text: "The leaves on that are so pretty",
        voteCount: 4542
    },
    {
        user_id: 4,
        plant_id: 22,
        comment_text: "You should get a bigger pot for that one",
        voteCount: 1235
    },
    {
        user_id: 4,
        plant_id: 23,
        comment_text: "I wish I was that plant",
        voteCount: 5645
    },
    {
        user_id: 4,
        plant_id: 24,
        comment_text: "Pretty darn cool",
        voteCount: 4541
    }
]

async function seedComment(){
    const comments = await Comment.bulkCreate(commentData, {
        individualHooks: true
    })
}

module.exports = seedComment