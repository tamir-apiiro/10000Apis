
const express = require('express')
import {handler7750} from "./handler7750";
const app = express()
app.get('/7750', handler7750)
app.listen(3000, () => {})
        