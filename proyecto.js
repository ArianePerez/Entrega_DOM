const navbar = document.getElementById('navbar')

navbar.innerHTML = `
  <section id="name">Crazy Book Lady</section>
  <img src="./assets/Menu_Despegable.png" alt="Menu icon for use in media queries" id="menu"></img>
  <nav id="nav-links" class="nav-links">
    <a href="#">HOME</a>
    <a href="#">CONTACT</a>
    <a href="#">LOGIN</a>
  </nav>
`

const menu = document.getElementById('menu')
const navLinks = document.getElementById('nav-links')

menu.addEventListener('click', () => {
  navLinks.classList.toggle('active')
})

const categories = document.getElementById('categories')
const categoryList = [
  'ALL CATEGORIES',
  'FICTION',
  'NON FICTION',
  'COMIC & MANGA',
  'TEENS & YOUNG ADULTS',
  'KIDS'
]

categories.innerHTML = categoryList
  .map(
    (category) => `
  <button class="categoryBtn" data-category="${
    category === 'ALL CATEGORIES' ? '' : category
  }">
      ${category}
  </button>
`
  )

  .join('')

const searchInput = document.getElementById('searchInput')
const minPrice = document.getElementById('minPrice')
const maxPrice = document.getElementById('maxPrice')
const searchBtn = document.getElementById('searchBtn')
const bookContainer = document.getElementById('book-container')

const books = [
  {
    title: 'SUNRISE ON THE REAPING (A HUNGER GAMES NOVEL)',
    author: 'Suzanne Collins',
    price: 26.12,
    stars: 3.5,
    reviews: 34,
    category: 'FICTION : TEENS & YOUNG ADULTS',
    seller: 'Crazy Book Lady',
    image: 'https://imagessl4.casadellibro.com/a/l/s7/74/9780702340574.webp'
  },

  {
    title: 'FISH DO NOT SNEEZE',
    author: 'KIRSTIE WATSON',
    price: 11.01,
    stars: 2.5,
    reviews: 2,
    category: 'KIDS',
    seller: 'Crazy Book Lady',
    image: 'https://imagessl7.casadellibro.com/a/l/s7/47/9781916254947.webp'
  },

  {
    title: 'THE HOUSEMAID',
    author: 'Freida McFadden',
    price: 15.9,
    stars: 4.5,
    reviews: 7,
    category: 'FICTION',
    seller: 'Crazy Book Lady',
    image: 'https://imagessl2.casadellibro.com/a/l/s7/12/9781408728512.webp'
  },

  {
    title: 'AO ASHI 28',
    author: 'Yugo Kobayashi',
    price: 8.55,
    stars: 4,
    reviews: 2,
    category: 'COMIC & MANGA',
    seller: 'Crazy Book Lady',
    image: 'https://imagessl7.casadellibro.com/a/l/s7/37/9788467973037.webp'
  },

  {
    title: 'HARRY POTTER AND THE ORDER OF THE PHOENIX',
    author: 'J.K. ROWLING',
    price: 13.3,
    stars: 4.5,
    reviews: 3284,
    category: 'FICTION : TEENS & YOUNG ADULTS : KIDS',
    seller: 'Crazy Book Lady',
    image: 'https://imagessl0.casadellibro.com/a/l/s7/90/9781408855690.webp'
  },

  {
    title: 'ATOMIC HABITS',
    author: 'James Clear',
    price: 24.5,
    stars: 4,
    reviews: 3,
    category: 'NON FICTION',
    seller: 'Crazy Book Lady',
    image: 'https://imagessl1.casadellibro.com/a/l/s7/31/9781847941831.webp'
  },

  {
    title:
      'THE SHERLOCK HOLMES COLLECTION: DELUXE 6-VOLUME BOX SET EDITION (ARCTURUS COLLECTOR S CLASSICS)',
    author: 'Arthur Conan Doyle',
    price: 68.5,
    stars: 5,
    reviews: 364844,
    category: 'FICTION',
    seller: 'Crazy Book Lady',
    image: 'https://imagessl4.casadellibro.com/a/l/s7/94/9781784288594.webp'
  },

  {
    title: 'MARVEL: LA ENCICLOPEDIA',
    author: 'varios autores',
    price: 33.25,
    stars: 4.5,
    reviews: 10,
    category: 'COMIC & MANGA',
    seller: 'Crazy Book Lady',
    image: 'https://imagessl4.casadellibro.com/a/l/s7/74/9780241413074.webp'
  },

  {
    title: 'THE LITTLE PRINCE',
    author: 'Antoine de Saint-Exupéry',
    price: 6.0,
    stars: 4,
    reviews: 5434,
    category: 'KIDS',
    seller: 'Crazy Book Lady',
    image: 'https://imagessl9.casadellibro.com/a/l/s7/89/9781853261589.webp'
  },

  {
    title: 'THE SUBTLE ART OF NOT GIVING A FUCK',
    author: 'Mark Manson',
    price: 25.9,
    stars: 3,
    reviews: 12,
    category: 'NON FICTION',
    seller: 'Crazy Book Lady',
    image: 'https://imagessl4.casadellibro.com/a/l/s7/14/9780062457714.webp'
  },

  {
    title: 'FIRST ENCYCLOPEDIA OF SPACE',
    author: 'Paul Dowswell',
    price: 11.87,
    stars: 1,
    reviews: 4,
    category: 'KIDS',
    seller: 'Crazy Book Lady',
    image: 'https://imagessl4.casadellibro.com/a/l/s7/34/9781836041634.webp'
  },

  {
    title: 'WATCH ME',
    author: 'Tahereh Mafi',
    price: 22.32,
    stars: 4.5,
    reviews: 67,
    category: 'FICTION : TEENS & YOUNG ADULTS',
    seller: 'Crazy Book Lady',
    image: 'https://imagessl8.casadellibro.com/a/l/s7/38/9780008718138.webp'
  }
]

let selectedCategory = ''

function starRating(stars) {
  const fullStars = Math.floor(stars)
  const halfStar = stars % 1 >= 0.5 ? 1 : 0
  const emptyStars = 5 - fullStars - halfStar

  return (
    '<i class="fas fa-star" style="color: gold;"></i>'.repeat(fullStars) +
    (halfStar
      ? '<i class="fas fa-star-half-alt" style="color: gold;"></i>'
      : '') +
    '<i class="far fa-star" style="color: gold;"></i>'.repeat(emptyStars)
  )
}

function renderBooks(bookList) {
  bookContainer.innerHTML = ''
  if (bookList.length === 0) {
    bookContainer.innerHTML =
      '<p>No books were found that meet your search criteria.<p>'
    return
  }

  bookList.forEach((book) => {
    const event = `
      <div class="book-card">
        <img src="${book.image}" alt="${book.title}">
        <h3>${book.title}</h3>
        <h4>${book.author}</h4>
        <h5>${book.price.toFixed(2)} €</h5>
        <h6> ${starRating(book.stars)} (${book.reviews})</h6>
        </div>
    `
    bookContainer.insertAdjacentHTML('beforeend', event)
  })
}

function filterBooks() {
  const searchText = searchInput.value.toLowerCase()
  const min = parseFloat(minPrice.value) || 0
  const max = parseFloat(maxPrice.value) || Infinity

  const filtered = books.filter((book) => {
    const matchesTitle = book.title.toLowerCase().includes(searchText)
    const matchesAuthor = book.author.toLowerCase().includes(searchText)
    const matchesPrice = book.price >= min && book.price <= max
    const matchesCategory =
      selectedCategory === '' ||
      book.category.toLowerCase().includes(selectedCategory.toLowerCase())

    return (matchesTitle || matchesAuthor) && matchesPrice && matchesCategory
  })

  renderBooks(filtered)
}

function clearFilters() {
  searchInput.value = ''
  minPrice.value = ''
  maxPrice.value = ''
  selectedCategory = ''
  document
    .querySelectorAll('.categoryBtn')
    .forEach((btn) => btn.classList.remove('active'))
}

function CategoriesButtons() {
  const categoryBtn = document.querySelectorAll('.categoryBtn')

  categoryBtn.forEach((btn) => {
    btn.addEventListener('click', (preventConflicts) => {
      preventConflicts.stopPropagation()
      categoryBtn.forEach((b) => b.classList.remove('active'))
      btn.classList.add('active')
      selectedCategory = btn.dataset.category
      filterBooks()
    })
  })
}

function toggleCategories() {
  if (window.innerWidth <= 800) {
    categories.classList.toggle('expanded')
  }
}

function enterKey(ek) {
  if (ek.key === 'Enter') {
    filterBooks()
    clearFilters()
  }
}

searchInput.addEventListener('keydown', enterKey)
minPrice.addEventListener('keydown', enterKey)
maxPrice.addEventListener('keydown', enterKey)

searchBtn.addEventListener('click', () => {
  filterBooks()
  clearFilters()
})

categories.addEventListener('click', toggleCategories)

renderBooks(books)

CategoriesButtons()
