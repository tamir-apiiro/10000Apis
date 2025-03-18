
const express = require('express')
import {handler3681} from "./handler3681";
const app = express()
app.get('/3681', handler3681)
app.listen(3000, () => {})
        