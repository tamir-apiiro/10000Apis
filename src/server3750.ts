
const express = require('express')
import {handler3750} from "./handler3750";
const app = express()
app.get('/3750', handler3750)
app.listen(3000, () => {})
        