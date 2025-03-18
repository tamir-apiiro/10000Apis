
const express = require('express')
import {handler8750} from "./handler8750";
const app = express()
app.get('/8750', handler8750)
app.listen(3000, () => {})
        