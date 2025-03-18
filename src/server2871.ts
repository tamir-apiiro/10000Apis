
const express = require('express')
import {handler2871} from "./handler2871";
const app = express()
app.get('/2871', handler2871)
app.listen(3000, () => {})
        