
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
    id;

    constructor( author = null, name = null, content = null) {
        this.author = author;
        this.name = name;
        this.content = content;
        this.created = new Date();
        this.id = Publication.id(author);
    }
    static id(x) { //I created an id "maker" for book entries
        let initials = x.split(' ').map(function(word) { return word[0]}).join('');
        let id = initials + "-" + (Math.floor(1000 + Math.random() * 9000));
        return id;
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


//IAllende.id(); // id: IA-7953
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
    constructor(author, name, content, edited, address) {
        super(author, name, content);
        this.edited = edited;
        this.address = address;
    }
    numPosts() {
        const postsCount = Math.floor(Math.random() * 6) + 1 ; //tells a random number of posts published
        console.log(`${this.author} has published ${postsCount} posts`);
    }
}

const blog1 = new Blogpost("July SuperBlogger", "Blog Post", "This is what this blogpost is about, bla bla, super important stuff about blog posts!", "edited by July SP", "Kreuzberg, Berlin, DE");

console.log(blog1);
blog1.numPosts(); //July SuperBogger has published 5 posts
// Blogpost {
//     author: 'July SuperBlogger',
//     name: 'Blog Post'
//     content: 'edited by July SP',
//     created: 2021-05-20T12:14:17.888Z,
//     edited: 'This is what this blogpost is about, bla bla, super important stuff about blog posts!',
//     address: 'Kreuzberg, Berlin, DE'
//   }


const blog2 = new Blogpost("Luzy BoringBlogger", "Blog Post", "edited by Luzy BB", "Today we talk about the importance of getting bored and dealing with fustration", "NYC, USA");

console.log(blog2);
blog2.numPosts(); // Luzy BoringBlogger has published 6 posts
// Blogpost {
//     author: 'Luzy BoringBlogger',
//     name: Blog Post,
//     content: edited by Luzy BB,
//     created: 2021-05-20T12:14:17.888Z,
//     edited: 'Today we talk about the importance of getting bored and dealing with fustration',
//     address: 'NYC, USA'
//   }


const blog3 = new Blogpost("Tommy Lee Sunny", "Blog Post", "edited by Tommy LeeS", "About the strange life of wild bears in hivernation when there is global warming and clima change!", "Antartica DC, Antartica");

console.log(blog3);
blog3.numPosts(); // Tommy Lee Sunny has published 4 posts
// Blogpost {
//     author: 'Tommy Lee Sunny',
//     name: Blog Post,
//     content: edited by Tommy LeeS,
//     created: 2021-05-20T12:14:17.889Z,
//     edited: 'About the strange life of wild bears in hivernation when there is global warming and clima change!',
//     address: 'Antartica DC, Antartica'
//   }




// 3. Create a class called "Book" that is a child of Publication
// - All blogpost have an ISBN field  (given during their creation)
//     (for reference https://en.wikipedia.org/wiki/International_Standard_Book_Number)

class Book extends Publication {
    title;
    constructor(author, title, name, content,) {
        super(author, name, content,);
        this.title = title;
        this.ISBN = "ISBN" + Math.floor(10000000 + Math.random() * 90000000) + "-" + Math.floor(Math.random() * 10);

    }
    ISBNcode() {
        const ISBNnum = Math.floor(10000000 + Math.random() * 90000000) + "-" + Math.floor(Math.random() * 10);
        console.log(this.ISBN);
    }
        
}

const academicBook = new Book("Zygmunt Bauman", "Liquid Modernity", "Contemporary sociology", "In this new book, Bauman examines how we have moved away from a 'heavy' and 'solid', hardware-focused modernity to a 'light' and 'liquid', software-based modernity. This passage, he argues, has brought profound change to all aspects of the human condition. ...");
console.log(academicBook);
academicBook.ISBNcode(); //Book reference: ISBN73323849-2
// Book {
//     author: 'Zygmunt Bauman',
//     name: 'Contemporary sociology',
//     content: "In this new book, Bauman examines how we have moved away from a 'heavy' and 'solid', hardware-focused modernity to a 'light' and 'liquid', software-based modernity. This passage, he argues, has brought profound change to all aspects of the human condition. ...",
//     created: 2021-05-20T12:40:00.423Z,
//     title: 'Liquid Modernity'
//   }
//   Book reference: ISBN73323849-2


const SciFiBook = new Book("Ursula K. Le Guin", "The Dispossessed", "SCI-FI", "The Dispossessed: An Ambiguous Utopia is a 1974 utopian science fiction novel by American writer Ursula K. Le Guin, set in the fictional universe of the seven novels of the Hainish Cycle, e.g. The Left Hand of Darkness." );
console.log(SciFiBook);
SciFiBook.ISBNcode(); //Book reference: ISBN55480383-5
// Book {
//     author: 'Ursula K. Le Guin',
//     name: 'SCI-FI',
//     content: 'The Dispossessed: An Ambiguous Utopia is a 1974 utopian science fiction novel by American writer Ursula K. Le Guin, set in the fictional universe of the seven novels of the Hainish Cycle, e.g. The Left Hand of Darkness.',
//     created: 2021-05-20T12:41:49.527Z,
//     title: 'The Dispossessed'
//   }
//   Book reference: ISBN55480383-5


const ComicBook = new Book("Mariko Tamaki", "This One Summer", "Graphic novel", "This One Summer is a graphic novel written by Mariko Tamaki and illustrated by Jillian Tamaki published by First Second Books in 2014. It is a coming of age story about two teenage friends, Rose and Windy, during a summer in Awago, a small beach town"
);
console.log(ComicBook);
ComicBook.ISBNcode(); //Book reference: ISBN51695695-4
// Book {
//     author: 'Mariko Tamaki',
//     name: 'Graphic novel',
//     content: 'This One Summer is a graphic novel written by Mariko Tamaki and illustrated by Jillian Tamaki published by First Second Books in 2014. It is a coming of age story about two teenage friends, Rose and Windy, during a summer in Awago, a small beach town',
//     created: 2021-05-20T12:42:59.996Z,
//     title: 'This One Summer'
//   }
//   Book reference: ISBN51695695-4





// 4. Create a class called "Score" that is a child of Publication

// - All scores must have a type field (given during their creation)

class Score extends Publication {
    type;
    title;
    constructor(author, name, content, type, title, ) {
        super(author, name, content);
        this.type = type;
        this.title = title;
    }
}


const kidsBookFan = new Score("Michael Ende", "Children book", "To escape from his dull life and bullies at school, Bastain takes refuge in an old book store. There, he begins reading an old storybook and finds himself drawn into the mythical world of Fantasia.", "Fantasy", "The NeverEnding Story",);
console.log(kidsBookFan);
// Score {
//     author: 'Michael Ende',
//     name: 'Children book',
//     content: 'To escape from his dull life and bullies at school, Bastain takes refuge in an old book store. There, he begins reading an old storybook and finds himself drawn into the mythical world of Fantasia.',
//     created: 2021-05-20T12:38:09.038Z,
//     type: 'Fantasy',
//     title: 'The NeverEnding Story'
//   }

const kidsBookPippi = new Score("Astrid Lindgren", "Children book", "Pippi Longstocking is the fictional main character in an eponymous series of children's books by Swedish author Astrid Lindgren. Pippi was named by Lindgren's daughter Karin, who asked her mother for a get-well story when she was off school", "fiction", "Pippi Langstrumpf");
console.log(kidsBookPippi);
// Score {
//     author: 'Astrid Lindgren',
//     name: 'Children book',
//     content: "Pippi Longstocking is the fictional main character in an eponymous series of children's books by Swedish author Astrid Lindgren. Pippi was named by Lindgren's daughter Karin, who asked her mother for a get-well story when she was off school",
//     created: 2021-05-20T12:33:45.027Z,
//     type: 'fiction',
//     title: 'Pippi Langstrumpf'
//   }


const kidsBookMonsters = new Score("Santi Balmes", "Children book", "Bedtime Story","What if an entire world of MONSTERS lived underneath your floor? Martina is having trouble sleeping because she is afraid monsters might break through the floor and bring her into the monster world where she’ll have to learn how to scare humans...", "Bedtime story", "I Will Fight Monsters for You");
console.log(kidsBookMonsters);

// Score {
//     author: 'Santi Balmes',
//     name: 'Children book',
//     content: 'Bedtime Story`,
//     created: 2021-05-20T12:35:32.480Z,
//     type: 'What if an entire world of MONSTERS lived underneath your floor? Martina is having trouble sleeping because she is afraid monsters might break through the floor and bring her into the monster world where she’ll have to learn how to scare humans...',
//     title: 'Bedtime story'
//   }

