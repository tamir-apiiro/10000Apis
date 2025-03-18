
const express = require('express')
import {handler1681} from "./handler1681";
const app = express()
app.get('/1681', handler1681)
app.listen(3000, () => {})
        