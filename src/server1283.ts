
const express = require('express')
import {handler1283} from "./handler1283";
const app = express()
app.get('/1283', handler1283)
app.listen(3000, () => {})
        