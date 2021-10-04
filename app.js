const app = Vue.createApp({
  // data, functions
  data() {
    return {
      url: 'http://www.thenetninja.co.uk',
      showBooks: true,
      title: 'The Final Empire',
      author: 'Brandon Sanderson',
      age: 45,
      x: 0,
      y: 0,
      books: [
        { title: 'name of the wind', author: 'patrick rothfuss', isFav: true },
        { title: 'the way of kings', author: 'brandon sanderson', isFav: false },
        { title: 'the final empire', author: 'brandon sanderson', isFav: true }
      ],
      isFav: false
    }
  },
  methods: {
    // changeTitle(title) {
    //   this.title = title
    // }
    toggleShowBooks() {
      this.showBooks = !this.showBooks
    },
    handleEvent(e, data) {
      console.log(e, e.type)
      if (data) {
        console.log(data)
      }
    },
    handleMousemove(e) {
      this.x = e.offsetX
      this.y = e.offsetY
    },
    handleIsFav(book) {
      book.isFav = !book.isFav
    }
  },
  computed: {
    filteredBooks() {
      return this.books.filter(book => book.isFav)
    }
  }
})

app.mount('#app')