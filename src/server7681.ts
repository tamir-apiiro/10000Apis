
const express = require('express')
import {handler7681} from "./handler7681";
const app = express()
app.get('/7681', handler7681)
app.listen(3000, () => {})
        