## Project Title: Personal Website
## Framework: React/Chakra/Vanilla JS
## Author: Pranav Chati

### Todos
[x] Fix favicon issues and add 👨🏽‍💻 as website title
[ ] Make sure website changes to screen dimensions
[ ] Currently have margin left and right pre-defined as links, is there a better way to do it?
[ ] Add "I am Student, Enterpreneur, Programmer" animation underneath name

## Learnings
During this project, the coolest thing I kind of learned was how to better use the terminal. Specifically when I was initially trying to figure out the icons to use, I was initially playing around with FontAwesome; however, I didn't entirely like their fonts. I used `npm list` to figure out which dependencies that I currently have, and which ones I didn't need. I uninstalled the FontAwesome dependecies. It was cool to learn that such things exist though. 

Some cool Learnings also include:
* Learned the differences between "import `Name` from `File`" *and* "import { `Name` } from `File`". The main difference is that in the latter, the `Name` in the `File` cannot be an export default. There can only be 1 export default. The use case of this is if you have a file with a variety of different functions in it, like add, subtract, etc. In that case you could have a `Math.js` file with four functions that change the behavior of the DOM for each function. That case would use "import { `add`, `subract`, `multiple`, `divide` } from `Math.js`;"
* Learned that `p` in CSS is shorthard for padding. It's interesting that there is no `pBottom` for `paddingBottom`. It does sound silly though.