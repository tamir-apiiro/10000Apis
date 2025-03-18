
const express = require('express')
import {handler2282} from "./handler2282";
const app = express()
app.get('/2282', handler2282)
app.listen(3000, () => {})
        