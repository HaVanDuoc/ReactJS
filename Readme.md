<!-- 1. Create project -->

npm init

<!-- 2. Install Express -->

// Framework mã nguồn mở hổ trợ javascript

npm i express

<!-- 3. Install Nodemon $ inspector -->

// Lắng nghe thay đổi auto reload page

npm i nodemon --save-dev

"start": "nodemon --inspect index.js"

<!-- 4. Install Morgan -->

// Quan sát log được request từ client lên server

npm i morgan --save-dev

<!-- 5. Install Template engines (Handlebars) -->

npm install express-handlebars

<!-- 6. Config Static file -->

app.use(express.static(path.join(\_\_dirname, 'public')))

<!-- 7. Install node-SASS -->

npm i node-sass --save-dev