
const express = require('express')
import {handler6681} from "./handler6681";
const app = express()
app.get('/6681', handler6681)
app.listen(3000, () => {})
        