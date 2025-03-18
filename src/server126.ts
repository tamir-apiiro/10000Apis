
const express = require('express')
import {handler126} from "./handler126";
const app = express()
app.get('/126', handler126)
app.listen(3000, () => {})
        