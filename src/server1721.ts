
const express = require('express')
import {handler1721} from "./handler1721";
const app = express()
app.get('/1721', handler1721)
app.listen(3000, () => {})
        