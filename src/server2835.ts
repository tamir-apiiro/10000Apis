
const express = require('express')
import {handler2835} from "./handler2835";
const app = express()
app.get('/2835', handler2835)
app.listen(3000, () => {})
        