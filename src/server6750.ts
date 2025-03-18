
const express = require('express')
import {handler6750} from "./handler6750";
const app = express()
app.get('/6750', handler6750)
app.listen(3000, () => {})
        