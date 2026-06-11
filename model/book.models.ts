export interface Book {
    id: string;
    title: string;
    authorId: string;
    name: string;
}
export const books: Book[] = [

    {id: "b2", title: "Harry Potter", authorId: "a2",name:"George R.R. Martin" },

    { id: "b3", title: "A Game of Thrones", authorId: "a2" ,name: "George R.R. Martin" },
    { id: "b4", title: "A Clash of Kings", authorId: "a2",name: "George R.R. Martin" },

    { id: "b5", title: "The Hobbit", authorId: "a3",name: "J.R.R. Tolkien" },
    { id: "b6", title: "The Lord of the Rings", authorId: "a3", name: "J.R.R. Tolkien"},

    { id: "b7", title: "Murder on the Orient Express", authorId: "a4",name: "Agatha Christie" },
    { id: "b8", title: "And Then There Were None", authorId: "a4", name: "Agatha Christie"},

    { id: "b9", title: "The Shining", authorId: "a5", name: "Stephen King" },
    { id: "b10", title: "IT", authorId: "a5",name: "Stephen King"  },
];
export default books;