
const express = require('express')
import {handler494} from "./handler494";
const app = express()
app.get('/494', handler494)
app.listen(3000, () => {})
        