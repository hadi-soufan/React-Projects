const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Desctructuring

const books = getBooks();

books;

const book = getBook(1);

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

console.log(title, author, genres);

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

const [primaryGenre, secondaryGenre, ...otherGenres] = genres;

console.log(primaryGenre, secondaryGenre, otherGenres);

const newGenres = ["epic fantasy", ...genres];

newGenres;

// adding new object using spread operatores, its good for adding or updating to keep the spread operator at the beginning
const updatedBook = {
  ...book,
  moviePublicationDate: "2001-12-19",

  // overriding an existing property
  pages: 1210,
};
updatedBook;

const getYearNew = (str) => str.split("-")[0];

// Template literals
const summary = `${title}, a ${pages}-pages long book, was written by ${author} and published in ${getYearNew(
  publicationDate
)}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie.`;
summary;

// ternaries operator

const pagesRange = pages > 1000 ? "over a 1000" : "less then 1000";
pagesRange;
console.log(`the book has ${pagesRange} page`);

// Arrow functions

// old way
function getYearOld(str) {
  return str.split("-")[0];
}
console.log(getYearOld(publicationDate));

// new way
console.log(getYearNew(publicationDate));

// logical operators
console.log(true && "Some string");
console.log(false && "Some string");
console.log(hasMovieAdaptation && "This book has a movie");

console.log("hadi" && "some string"); // truthy value
console.log(0 && "some string"); // falsy value

console.log(true || "some string");
console.log(false || "some string");

console.log(book.translations.spanish);

const spanishTransalation = book.translations.spanish || "Not transalated";

// optional chaining
function getTotalReviewCount(book) {
  const goodreads = book.reviews.Goodreads?.reviewsCount;
  const libraryanything = book.reviews.libraryanything?.reviewsCount;
  return goodreads + libraryanything;
}

// getTotalReviewCount(book);

const newBooks = getBooks();
newBooks;

// mapping
const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x);

const newtitle = newBooks.map((book) => book.title);

console.log(newtitle);

const essentialData = newBooks.map((book) => {
  return {
    title: book.title,
    author: book.author,
    reviewsCount: getTotalReviewCount(book),
  };
});
essentialData;

// filter
const longBooks = newBooks
  .filter((book) => book.pages > 500)
  .map((book) => book.title);
longBooks;

// reduce
const pagesAllBooks = newBooks.reduce((acc, book) => acc + book.pages, 0);
pagesAllBooks;

// sorting
const y = [4, 7, 2, 1, 7, 9, 4];
const sorted = y.sort((a, b) => a - b);
sorted;
