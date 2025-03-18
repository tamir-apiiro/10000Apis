
const express = require('express')
import {handler1750} from "./handler1750";
const app = express()
app.get('/1750', handler1750)
app.listen(3000, () => {})
        