# Tests for Mate Academy

[Demo](https://yaroslavkolbaiev.github.io/my-test-app)

## Task 1 (30 min-1 hour)

Write a function that finds the most frequent character in a string (case insensitive)

## Task 2 (1-3 hours)

Create simple HTML form with text field and buttons “Set” and “Clear”. On submit form set item to local storage with key “num23” and value from the text field. On click “Clear” button clean up text field and delete item “num23” from local storage. On page load get item “num23” from local storage, create paragraph element, set according value into paragraph, and insert it before form. Paint paragraph in red if item value is odd and in green if item value is even.

Text field should accept only numbers.
Form should not be submitted if the field value is empty.
Disable “Set” button if the field value is empty.

## Task 3 (30 min-1 hour)

Write script that will parse query params from url and transform it into object with according key and value.

URL example:

http://localhost:63342/test/index.html?em=world&ew=book

Object example:

{
	“em” : ”world”,
“ew” : ”book”
}

## Task 4 (2-5 hours)

Write script that displays a list of products from server response data. (you may take design of the product card from this task)

Request method: GET
Server returns encoded JSON string in base64

## Task 5

Please implement the following task using React and Redux/MobX.

The result is expected to be ONE repository on GitHub/GitLab/Bitbucket/etc

Create a webpage that shows lists of products. User can add or remove products. Also, the user should be able to pin an item, which means the item has to be the first in the list. Only one pinned item is allowed. Items can be searched by name or description.

Items have to be shown:
3 columns (≥ 992px)
2 columns (≥576px && <992px)
1 column (<576px)

Product entity:
Image
Name
Description
Price
