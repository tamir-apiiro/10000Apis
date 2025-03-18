
const express = require('express')
import {handler9750} from "./handler9750";
const app = express()
app.get('/9750', handler9750)
app.listen(3000, () => {})
        