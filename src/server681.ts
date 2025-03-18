
const express = require('express')
import {handler681} from "./handler681";
const app = express()
app.get('/681', handler681)
app.listen(3000, () => {})
        