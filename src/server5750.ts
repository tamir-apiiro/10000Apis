
const express = require('express')
import {handler5750} from "./handler5750";
const app = express()
app.get('/5750', handler5750)
app.listen(3000, () => {})
        