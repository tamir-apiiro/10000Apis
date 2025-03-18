
const express = require('express')
import {handler4750} from "./handler4750";
const app = express()
app.get('/4750', handler4750)
app.listen(3000, () => {})
        