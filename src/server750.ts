
const express = require('express')
import {handler750} from "./handler750";
const app = express()
app.get('/750', handler750)
app.listen(3000, () => {})
        