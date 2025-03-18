
const express = require('express')
import {handler5681} from "./handler5681";
const app = express()
app.get('/5681', handler5681)
app.listen(3000, () => {})
        