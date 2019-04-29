const { Router } = require('express')

const router = Router()

const data = [
  {
    id: 1,
    slug: 'et-totam-odio',
    title: 'Adipisci quo in doloribus quaerat libero veritatis.',
    content: 'Id aut architecto quia laborum et. Sit est sunt quis voluptas voluptatem cum. Modi iste hic. Ducimus consectetur nostrum illum aut architecto et. Dolorum labore possimus placeat optio et voluptatum minus quaerat.'
  },
  {
    id: 2,
    slug: 'sit-deleniti-alias',
    title: 'Suscipit corrupti ratione et nobis.',
    content: 'Id aut architecto quia laborum et. Sit est sunt quis voluptas voluptatem cum. Modi iste hic. Ducimus consectetur nostrum illum aut architecto et. Dolorum labore possimus placeat optio et voluptatum minus quaerat.'
  },
  {
    id: 3,
    slug: 'occaecati-eaque-facilis',
    title: 'Odit debitis inventore et animi voluptatum debitis dolorem eos dolorem.',
    content: 'Id aut architecto quia laborum et. Sit est sunt quis voluptas voluptatem cum. Modi iste hic. Ducimus consectetur nostrum illum aut architecto et. Dolorum labore possimus placeat optio et voluptatum minus quaerat.'
  },
  {
    id: 4,
    slug: 'et-hic-ut',
    title: '"Nulla perferendis aut.',
    content: 'Id aut architecto quia laborum et. Sit est sunt quis voluptas voluptatem cum. Modi iste hic. Ducimus consectetur nostrum illum aut architecto et. Dolorum labore possimus placeat optio et voluptatum minus quaerat.'
  },
  {
    id: 5,
    slug: 'rem-est-aut',
    title: 'Eos eos ut est est quidem magnam et sequi.',
    content: 'Id aut architecto quia laborum et. Sit est sunt quis voluptas voluptatem cum. Modi iste hic. Ducimus consectetur nostrum illum aut architecto et. Dolorum labore possimus placeat optio et voluptatum minus quaerat.'
  },
  {
    id: 6,
    slug: 'ut-optio-voluptatem',
    title: 'Dolores et vel iste est in.',
    content: 'Id aut architecto quia laborum et. Sit est sunt quis voluptas voluptatem cum. Modi iste hic. Ducimus consectetur nostrum illum aut architecto et. Dolorum labore possimus placeat optio et voluptatum minus quaerat.'
  }
]

class Post {


  constructor() {
    this.posts = data
  }

  getPosts(options = {}) {
    // todo filter by options
    return this.posts
  }
}

const posts = new Post()

router.get('/posts', function (req, res, next) {
  res.json(posts.getPosts())
})

module.exports = router

