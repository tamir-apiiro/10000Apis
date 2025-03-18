
const express = require('express')
import {handler2750} from "./handler2750";
const app = express()
app.get('/2750', handler2750)
app.listen(3000, () => {})
        