
const express = require('express')
import {handler2122} from "./handler2122";
const app = express()
app.get('/2122', handler2122)
app.listen(3000, () => {})
        