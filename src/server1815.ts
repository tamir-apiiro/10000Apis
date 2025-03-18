
const express = require('express')
import {handler1815} from "./handler1815";
const app = express()
app.get('/1815', handler1815)
app.listen(3000, () => {})
        