class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
    }
    fix() {
      this.state *= 1.5;
    }
    set state(value) {
      if (value < 0) {
        this.state = 0;
      } else if (value > 100) {
        this.state = 100;
      } else {
        this._state = value;
      }
    }
    get state() {
      return this._state;
    }
  }
  const sherlock = new PrintEditionItem(
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
  );
  console.log(sherlock.releaseDate); //2019
  console.log(sherlock.state); //100
  sherlock.fix();
  console.log(sherlock.state); //100
  
  class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type) {
      super(name, releaseDate, pagesCount, state);
      this.type = "magazine";
    }
  }
  class Book extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type, author) {
      super(name, releaseDate, pagesCount, state, author);
      this.type = "book";
      this.author = author;
    }
  }
  class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, state, type, author) {
      super(name, releaseDate, pagesCount, state);
      this.type = "novel";
      this.author = author;
    }
  }
  class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount, state, type, author) {
      super(name, releaseDate, pagesCount, state);
      this.type = "FantasticBook";
      this.author = author;
    }
  }
  class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount, state, type, author) {
      super(name, releaseDate, pagesCount, state);
      this.type = "DetectiveBookk";
      this.author = author;
    }
  }
  
  const picknick = new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  );
  
  console.log(picknick.author); //"Аркадий и Борис Стругацкие"
  picknick.state = 10;
  console.log(picknick.state); //10
  picknick.fix();
  console.log(picknick.state); //15
  
  class Library {
    constructor(name, books) {
      this.name = "name";
      this.books = [];
    }
    addBook(book) {
      if (this.state > 30) {
        this.books.push(book);
      }
    }
    findBookBy(type, value) {
      function getBook(type) {
        return (book) => book[type] === value;
      }
      return Library.book.find(getBook(type));
    }
    giveBookByName(bookName) {
      if (this.name === bookName) {
        this.name.pop(bookName);
      } else {
        this.name = "null";
      }
    }
  }
  