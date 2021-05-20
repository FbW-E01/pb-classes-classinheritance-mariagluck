
// 1. Create a base class called `Publication`.

// - All publications need an identifier field
// - All publications need an authors field
// - All publications need a name field
// - All publications need a content field
// - All publications need a created field
// - When a publication is created, save the current date into the created field
// - All other fields are null by default
// - All publications need a method that prints out their description (id, name, authors)

class Publication {
    author;
    name;
    content;
    created;

    constructor( author = null, name = null, content = null) {
        this.author = author;
        this.name = name;
        this.content = content;
        this.created = new Date();
    }
    id() { //I created an id "maker" for book entries
        let initials = this.author.split(' ').map(function(word) { return word[0]}).join('');
        let id = initials + "-" + (Math.floor(1000 + Math.random() * 9000));
        console.log(`id: ${id}`);
    }
    author() {
        console.log(`Author is ${this.author}`);

    }
    name() {
        console.log(`Name is ${this.name}`)
    }
    content() {
        console.log(`Content: ${this.content}`);
    }
       

}

const IAllende = new Publication("Isabel Allende", "La casa de los espíritus", "The story details the life of the Trueba family, spanning four generations, and tracing the post-colonial social and political upheavals of Chile – though the country's name and the names of figures closely paralleling historical ones, such as 'the President' or 'the Poet', are never explicitly given. The story is told mainly from the perspective of two protagonists (Esteban and Alba) and incorporates elements of magical realism.");


IAllende.id(); // id: IA-7953
console.log(IAllende);

// id: IA-7953
// Publication {
//   author: 'Isabel Allende',
//   name: 'La casa de los espíritus',
//   content: "The story details the life of the Trueba family, spanning four generations, and tracing the post-colonial social and political upheavals of Chile – though the country's name and the names of figures closely paralleling historical ones, such as 'the President' or 'the Poet', are never explicitly given. The story is told mainly from the perspective of two protagonists (Esteban and Alba) and incorporates elements of magical realism.",
//   created: 2021-05-20T12:14:17.882Z
// }



// 2. Create a class called "Blogpost" that is a child of Publication

// - All blogpost have an edited field (given during their creation)
// - All blogpost have an address field (given during their creation)

class Blogpost extends Publication {
    constructor(author, edited, address) {
        super(author);
        this.edited = edited;
        this.address = address;
    }
    numPosts() {
        const postsCount = Math.floor(Math.random() * 6) + 1 ; //I will change this for a counter 
        console.log(`${this.author} has published ${postsCount} posts`);
    }
}

const blog1 = new Blogpost("July SuperBlogger", "This is what this blogpost is about, bla bla, super important stuff about blog posts!", "Kreuzberg, Berlin, DE");

console.log(blog1);
blog1.numPosts(); //July SuperBogger has published 5 posts
// Blogpost {
//     author: 'July SuperBlogger',
//     name: null,
//     content: null,
//     created: 2021-05-20T12:14:17.888Z,
//     edited: 'This is what this blogpost is about, bla bla, super important stuff about blog posts!',
//     address: 'Kreuzberg, Berlin, DE'
//   }


const blog2 = new Blogpost("Luzy BoringBlogger", "Today we talk about the importance of getting bored and dealing with fustration", "NYC, USA");

console.log(blog2);
blog2.numPosts(); // Luzy BoringBlogger has published 6 posts
// Blogpost {
//     author: 'Luzy BoringBlogger',
//     name: null,
//     content: null,
//     created: 2021-05-20T12:14:17.888Z,
//     edited: 'Today we talk about the importance of getting bored and dealing with fustration',
//     address: 'NYC, USA'
//   }


const blog3 = new Blogpost("Tommy Lee Sunny", "About the strange life of wild bears in hivernation when there is global warming and clima change!", "Antartica DC, Antartica");

console.log(blog3);
blog3.numPosts(); // Tommy Lee Sunny has published 4 posts
// Blogpost {
//     author: 'Tommy Lee Sunny',
//     name: null,
//     content: null,
//     created: 2021-05-20T12:14:17.889Z,
//     edited: 'About the strange life of wild bears in hivernation when there is global warming and clima change!',
//     address: 'Antartica DC, Antartica'
//   }




// 3. Create a class called "Book" that is a child of Publication
// - All blogpost have an ISBN field  (given during their creation)
//     (for reference https://en.wikipedia.org/wiki/International_Standard_Book_Number)

class Book extends Publication {
    title;
    constructor(author, title) {
        super(author);
        this.title = title;

    }
    ISBNcode() {
        const ISBNnum = Math.floor(10000000 + Math.random() * 90000000) + "-" + Math.floor(Math.random() * 10);
        console.log(`Book reference: ISBN${ISBNnum}`);
    }
        
}

const academicBook = new Book("Zygmunt Bauman", "Liquid Modernity");
console.log(academicBook);
academicBook.ISBNcode(); //Book reference: ISBN73323849-2
// Book {
//     author: 'Zygmunt Bauman',
//     name: null,
//     content: null,
//     created: 2021-05-20T12:14:17.889Z,
//     title: 'Liquid Modernity'
//   }
//   Book reference: ISBN73323849-2


const SciFiBook = new Book("Ursula K. Le Guin", "The Dispossessed");
console.log(SciFiBook);
SciFiBook.ISBNcode(); //Book reference: ISBN55480383-5
// Book {
//     author: 'Ursula K. Le Guin',
//     name: null,
//     content: null,
//     created: 2021-05-20T12:14:17.889Z,
//     title: 'The Dispossessed'
//   }
//   Book reference: ISBN55480383-5


const ComicBook = new Book("Mariko Tamaki", "This One Summer");
console.log(ComicBook);
ComicBook.ISBNcode(); //Book reference: ISBN51695695-4
// Book {
//     author: 'Mariko Tamaki',
//     name: null,
//     content: null,
//     created: 2021-05-20T12:14:17.890Z,
//     title: 'This One Summer'
//   }
//   Book reference: ISBN51695695-4





// 4. Create a class called "Score" that is a child of Publication

// - All scores must have a type field (given during their creation)

class Score extends Publication {
    type;
    title;
    constructor(author, type, title) {
        super(author);
        this.type = type;
        this.title = title;
    }
}


const kidsBookFan = new Score("Michael Ende", "Fantasy", "The NeverEnding Story",);
console.log(kidsBookFan);
// Score {
//     author: 'Michael Ende',
//     name: null,
//     content: null,
//     created: 2021-05-20T12:14:17.890Z,
//     type: 'Fantasy',
//     title: 'The NeverEnding Story'
//   }

const kidsBookPippi = new Score("Astrid Lindgren", "fiction", "Pippi Langstrumpf");
console.log(kidsBookPippi);
// Score {
//     author: 'Astrid Lindgren',
//     name: null,
//     content: null,
//     created: 2021-05-20T12:14:17.891Z,
//     type: 'fiction',
//     title: 'Pippi Langstrumpf'
//   }


const kidsBookMonsters = new Score("Santi Balmes", "Bedtime story", "I Will Fight Monsters for You");
console.log(kidsBookMonsters);

//   Score {
//     author: 'Santi Balmes',
//     name: null,
//     content: null,
//     created: 2021-05-20T12:14:17.891Z,
//     type: 'Bedtime story',
//     title: 'I Will Fight Monsters for You'
//   }


