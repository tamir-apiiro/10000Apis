
const express = require('express')
import {handler2594} from "./handler2594";
const app = express()
app.get('/2594', handler2594)
app.listen(3000, () => {})
        