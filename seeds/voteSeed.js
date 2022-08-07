const {Vote} = require("../models")

const voteData = [
    {
        voted: true,
        user_id: 1,
        comment_id: 1
    },
    {
        voted: true,
        user_id: 1,
        comment_id: 2
    },
    {
        voted: true,
        user_id: 1,
        comment_id: 3
    },
    {
        voted: true,
        user_id: 1,
        comment_id: 4
    },
    {
        voted: true,
        user_id: 1,
        comment_id: 5
    },
    {
        voted: true,
        user_id: 1,
        comment_id: 6
    },
    {
        voted: true,
        user_id: 2,
        comment_id: 7
    },
    {
        voted: true,
        user_id: 2,
        comment_id: 8
    },
    {
        voted: true,
        user_id: 2,
        comment_id: 9
    },
    {
        voted: true,
        user_id: 2,
        comment_id: 10
    },
    {
        voted: true,
        user_id: 2,
        comment_id: 11
    },
    {
        voted: true,
        user_id: 2,
        comment_id: 12
    },
    {
        voted: true,
        user_id: 3,
        comment_id: 13
    },
    {
        voted: true,
        user_id: 3,
        comment_id: 14
    },
    {
        voted: true,
        user_id: 3,
        comment_id: 15
    },
    {
        voted: true,
        user_id: 3,
        comment_id: 16
    },
    {
        voted: true,
        user_id: 3,
        comment_id: 17
    },
    {
        voted: true,
        user_id: 3,
        comment_id: 18
    },
    {
        voted: true,
        user_id: 4,
        comment_id: 19
    },
    {
        voted: true,
        user_id: 4,
        comment_id: 20
    },
    {
        voted: true,
        user_id: 4,
        comment_id: 21
    },
    {
        voted: true,
        user_id: 4,
        comment_id: 22
    },
    {
        voted: true,
        user_id: 4,
        comment_id: 23
    },
    {
        voted: true,
        user_id: 4,
        comment_id: 24
    },
]

async function seedVoteData(){
    const votes = await Vote.bulkCreate(voteData, {
        individualHooks: true
    })
}

module.exports = seedVoteData