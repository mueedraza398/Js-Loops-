// let dataSet = {
//   universityLibrary: {
//     name: "Knowledge Hub",
//     location: "Academic Avenue",
//     books: [
//       {
//         id: 101,
//         title: "Introduction to Algorithms",
//         author: "Thomas H. Cormen",
//         genre: "Computer Science",
//         copies: 10,
//         availability: 8,
//       },
//       {
//         id: 102,
//         title: "The Great Gatsby",
//         author: "F. Scott Fitzgerald",
//         genre: "Classic",
//         copies: 15,
//         availability: 12,
//       },
//       {
//         id: 103,
//         title: "Principles of Physics",
//         author: "Halliday & Resnick",
//         genre: "Physics",
//         copies: 8,
//         availability: 5,
//       },
//     ],
//     authors: [
//       {
//         name: "Thomas H. Cormen",
//         birthYear: 1956,
//         books: ["Introduction to Algorithms"],
//       },
//       {
//         name: "F. Scott Fitzgerald",
//         birthYear: 1896,
//         books: ["The Great Gatsby"],
//       },
//       {
//         name: "Halliday & Resnick",
//         birthYear: 1919,
//         books: ["Principles of Physics"],
//       },
//     ],
//     students: [
//       {
//         id: 1,
//         name: "Alice Johnson",
//         email: "alice@studentmail.com",
//         borrowedBooks: [
//           {
//             bookID: 101,
//             dueDate: "2023-08-15",
//           },
//           {
//             bookID: 102,
//             dueDate: "2025-08-20",
//           },
//         ],
//       },
//       {
//         id: 2,
//         name: "Bob Smith",
//         email: "bob@studentmail.com",
//         borrowedBooks: [
//           {
//             bookID: 103,
//             dueDate: "2025-08-18",
//           },
//         ],
//       },
//     ],
//   },
// };



// // //Implement a function that lists all books that are currently checked out and overdue. Provide details like the book title, student name, and the due date.
// // const listOverDueBooks = () => {
// //     const data = dataSet.universityLibrary;
// //     let result = []

// //      data.students.forEach((student) => {
// //          student.borrowedBooks.forEach((borrowedBook) => {
// //             const currentDate = new Date();
// //             const dueDate = new Date(borrowedBook.dueDate)

// //             if(dueDate > currentDate) {
// //                 const book = data.books.find((item) => item.id === borrowedBook.bookID)

// //                 if(book) {
// //                   result.push({
// //                     "Book Name": book.title,
// //                     "Student Name": student.name,
// //                     "Due Date": borrowedBook.dueDate
// //                   })
// //                 }
// //             }
// //          })
// //         })
// //         return result
// // }
// // console.log(listOverDueBooks())

// //Write a JavaScript function that analyzes the popularity of genres among borrowed books. Return an object containing each genre as a key and the total number of times books of that genre have been borrowed.

// // function analyze(borrowedBooks) {
// //   const genreCount = {};

// //   for (let i = 0; i < borrowedBooks.length; i++) {
// //     const genre = borrowedBooks[i].genre;

// //     if (genreCount[genre]) {
// //       genreCount[genre]++;
// //     } else {
// //       genreCount[genre] = 1;
// //     }
// //   }
// // }
// // console.log(analyze())
// // //Implement a function that takes an author’s birth year as input and returns a list of books written by authors born in that year. Include details like the book title, genre, and availability.



// // function writer(year){
// //   const data = dataSet.universityLibrary;
// //     const ages = data.authors.map((items) =>{
// //   return  items.birthYear
// //    })

// //    const birthday = data.authors.map((names)=>{
// //     return names.name
// //    })

// //   for(let i = 0 ; i<ages.length ; i++){
// //     if(year==ages[i]){
// //      console.log(data.books.filter(item => item.title === data.authors.find(author => author.birthYear === year).books[0]))
// //     }
// //   }

// // }
// // writer(1919)
















// // //Write a JavaScript function that identifies the oldest author in the dataset and returns their name along with the birth year.
// // function findoldest(){
// // const data = dataSet.universityLibrary;
// // const ages = data.authors.map((item) => {
// //   return item.birthYear
// // })

// // let oldest = 0

// // for (let i = 0; i < ages.length; i++) {
// //   let person = ages[i];
// //   if (oldest < person) {
// //     oldest = person
// //   }
// // }
// // const author = data.authors.filter((items) => {
// //   if (items.birthYear == oldest) {
// //     return items

// //   }
// // })
// // console.log(author)
// // }

// // findoldest();






// //Write a JavaScript function that calculates the duration for which a book has been borrowed by a student. The function should take the book’s due date and the current date as input and return the number of days the book has been borrowed for.

// // function Duration(dueDateStr, currentDateStr) {
// //   const dueDate = new Date(dueDateStr);
// //   const currentDate = new Date(currentDateStr);

// //   const timeDifference = currentDate - dueDate;
// //   const dayDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); 

// //   return dayDifference;
// // }
// // console.log(Duration("2025-06-01", "2025-05-31"))