// Find all books in the collection
db.books.find();

// Find books published after 1988
db.books.find ({published_year: {$gt: 1999}});

// Find books by a specific author
db.books.find ({author: "Aldous Huxley"});

// Update a book's price
db.books.updateOne({title: "Brave New World"},
               {$set: { price: 12.2 } }
);

// Delete a book
db.books.deleteOne({title: "1984"});

// Find all books that are in stock and published after 2010
db.books.find({ in_stock: true, published_year: { $gt: 1999 } });

// Update the price of "The Great Gatsby"
db.books.updateOne({title: "The Great Gatsby"},
                {$set: {price : 11.0}}
);

// Aggregate to find the average price of books by genre
db.books.aggregate([
  { $group: { _id: "$genre", average_price: { $avg: "$price" } } }
]);

// Compound index on author and published_year
db.books.createIndex({ author: 1, published_year: 1 });