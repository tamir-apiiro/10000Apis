
const express = require('express')
import {handler1914} from "./handler1914";
const app = express()
app.get('/1914', handler1914)
app.listen(3000, () => {})
        