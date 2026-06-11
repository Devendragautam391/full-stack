export interface Author {
    id: string;
    name: string;
}
export const authors: Author[] = [
    { id: "a2", name: "George R.R. Martin" },
    { id: "a3", name: "J.R.R. Tolkien" },
    { id: "a4", name: "Agatha Christie" },
    { id: "a5", name: "Stephen King" }
];
export default authors;