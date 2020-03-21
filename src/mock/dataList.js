var Mock = require('mockjs')
export default {
  // 用户注册
  register: {
    status: 200,
  },
  // 用户登陆 sex => 1 男 0 女
  usersInfo: [
    {
      id: Mock.Random.guid(),
      username: 'root',
      password: 'root12345',
      nickname: Mock.Random.cname(),
      avatars: 'https://avatars2.githubusercontent.com/u/14975630?v=4&s=120',
      sex: 1,
      age: '24',
      birth: '1994',
      email: 'root@gmail.com',
      phone: '18055454997',
      job: 'Java后台',
    },
    {
      id: Mock.Random.guid(),
      username: 'admin',
      password: 'admin12345',
      nickname: Mock.Random.cname(),
      avatars: 'https://avatars2.githubusercontent.com/u/2081487?v=4&s=120',
      sex: '22',
      age: 0,
      birth: '1996',
      email: 'admin@hotmail.com',
      phone: '18055454998',
      job: 'Web前端',
    }
  ],
  music: {
    types: [
      {
        type: "摇滚",
      }, {
        type: "古典",
      }, {
        type: "饶舌",
      }, {
        type: "蓝调",
      }
    ],
    songs: [
      Mock.mock({
        "array|1-5": [
          {
            "song|+1": [
              "祝福",
              "爸，我回来了",
              "Stan",
              "Breeze",
              "Going Home",
              "I can't change",
              "So Long",
              "Always You",
              "Dreamer",
              "Shut Up",
              "Just Can't Get Enough",
              "The Apl Song",
              "Where is the love",
              "Let's Get It Started",
              "Street living",
              "Sing For The Moment",
              "White America",
              "When I'm Gone",
              "Lose Yourself",
              "Not Afraid",
              "I Need a Doctor",
              "The Monster",
              "Love The Way You Lie (Part II)",
              "No Love",
              "Drop The World",
              "Without Me",
              "Difficult",
              "Till I Collapse",
              "Space Bound",
              "Wadsyaname",
              "When I B On Tha Mic",
              "I Miss You",
              "The Rain",
              "I'm Gonna Crawl",
              "Dilemma",
              "Panda",
              "Try again",
              "Rose In A Concrete World",
              "Yeah"
            ]
          }
        ]
      })
    ],
    singer: [
      {
        name: '张学友',
      }, {
        name: '周杰伦',
      }, {
        name: 'Eminem',
      }, {
        name: 'Nelly',
      }, {
        name: 'DMX',
      }, {
        name: 'Desiigner',
      }, {
        name: 'Rakim',
      }, {
        name: 'Black Eyed Peas',
      }, {
        name: 'Aaliyah',
      }, {
        name: 'Joe',
      }, {
        name: 'Usher',
      }
    ]
  }
}