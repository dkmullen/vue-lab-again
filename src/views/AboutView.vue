<script setup>
import { ref, shallowRef } from 'vue'
import TableComponent from '@/components/shared-components/TableComponent.vue'

const headers = [
  { title: 'Title', key: 'title', align: 'start' },
  { title: 'Author', key: 'author' },
  { title: 'Genre', key: 'genre' },
  { title: 'Year', key: 'year', align: 'end' },
  { title: 'Pages', key: 'pages', align: 'end' },
  { title: 'Actions', key: 'actions', align: 'end', sortable: false },
]

function handleDoAction({ action, id = null }) {
  console.log(`Action: ${action}, ID: ${id}`)
  switch (action) {
    case 'add':
      return add()
    case 'edit':
      return edit(id)
    case 'view':
      return view(id)
    case 'delete':
      return deleteItem(id)
    case 'save':
      return save(id)
    default:
      console.warn(`Unknown action: ${action}`)
  }
}

function add() {
  console.log('Adding...')
  formModel.value = createNewRecord()
  dialog.value = true
}

function view(id) {
  console.log(`Viewing book with ID: ${id}`)
}

function deleteItem(id) {
  console.log(`Deleting item with ID: ${id}`)
}

function save(item) {
  console.log('Saving item:', item)
  // if (isEditing.value) {
  //   const index = books.value.findIndex(book => book.id === formModel.value.id)
  //   books.value[index] = formModel.value
  // } else {
  //   formModel.value.id = books.value.length + 1
  //   books.value.push(formModel.value)
  // }

  // dialog.value = false
}

const books = [
  { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction', year: 1960, pages: 281 },
  { id: 2, title: '1984', author: 'George Orwell', genre: 'Dystopian', year: 1949, pages: 328 },
  { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Fiction', year: 1925, pages: 180 },
  { id: 4, title: 'Sapiens', author: 'Yuval Noah Harari', genre: 'Non-Fiction', year: 2011, pages: 443 },
  { id: 5, title: 'Dune', author: 'Frank Herbert', genre: 'Sci-Fi', year: 1965, pages: 412 },
  { id: 6, title: 'Brave New World', author: 'Aldous Huxley', genre: 'Dystopian', year: 1932, pages: 311 },
  { id: 7, title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Fiction', year: 1951, pages: 214 },
  { id: 8, title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fiction', year: 1937, pages: 310 },
  { id: 9, title: 'Fahrenheit 451', author: 'Ray Bradbury', genre: 'Dystopian', year: 1953, pages: 194 },
  { id: 10, title: 'The Martian', author: 'Andy Weir', genre: 'Sci-Fi', year: 2011, pages: 369 },
  { id: 11, title: 'The Road', author: 'Cormac McCarthy', genre: 'Dystopian', year: 2006, pages: 287 },
  { id: 12, title: 'The Alchemist', author: 'Paulo Coelho', genre: 'Fiction', year: 1988, pages: 208 },
]

const currentYear = new Date().getFullYear()
const formModel = ref(createNewRecord())
const dialog = shallowRef(false)
// const isEditing = toRef(() => !!formModel.value.id)

function createNewRecord () {
  return {
    title: '',
    author: '',
    genre: '',
    year: currentYear,
    pages: 1,
  }
}

function edit (id) {
  const found = books.value.find(book => book.id === id)
  formModel.value = {
    id: found.id,
    title: found.title,
    author: found.author,
    genre: found.genre,
    year: found.year,
    pages: found.pages,
  }
  dialog.value = true
}

</script>

<template>
  <h1>About</h1>
  <TableComponent :headers="headers" :items="books" @doAction="handleDoAction" />
</template>
