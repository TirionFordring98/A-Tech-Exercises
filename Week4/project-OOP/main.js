const fetchBookInfo = function (queryType, queryValue) {
    const encodedQueryValue = encodeURIComponent(queryValue);

    let url;
    if (queryType.toLowerCase() === 'isbn') {
        url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${encodedQueryValue}`;
    } else if (queryType.toLowerCase() === 'title') {
        url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${encodedQueryValue}`;
    } else {
        console.error('Invalid queryType. Supported values are "isbn" or "title".');
        return;
    }

    $.ajax({
        method: 'GET',
        url: url,
        success: function (data) {
            // Check if items array is present in the response
            if (data.items && data.items.length > 0) {
                data.items.forEach(book => {
                    const title = book.volumeInfo.title;
                    const authors = book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'N/A';
                    const isbn = book.volumeInfo.industryIdentifiers && book.volumeInfo.industryIdentifiers[0]
                        ? book.volumeInfo.industryIdentifiers[0].identifier
                        : 'N/A';

                    console.log(`Title: ${title}`);
                    console.log(`Authors: ${authors}`);
                    console.log(`ISBN: ${isbn}`);
                    console.log('-------------------');
                });
            } else {
                console.log('No books found.');
            }
        },
        error: function (xhr, text, error) {
            console.log(text);
        }
    });
};

// Example usage:
fetchBookInfo('isbn', '9789814561778');
fetchBookInfo('title', 'How to Win Friends and Influence People');
