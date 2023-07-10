export default function BookList() {
   let pageTitle = "Books I Love";
   let book1 = "https://pictures.abebooks.com/isbn/9780439567626-us.jpg"
   let book2 = "https://www.graywolfpress.org/sites/default/files/styles/book_cover_large/public/covers/9781555976903.png?itok=Vui2Y70E";
   let book3 = "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1388248283i/22285.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Harry Potter and the Order of the Phoenix" />
         <img src={book2} alt="Citizen" />
         <img src={book3} alt="Rant: An Oral Biography of BUster Casey" />
      </div>      
   );
}