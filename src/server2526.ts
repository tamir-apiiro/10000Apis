
const express = require('express')
import {handler2526} from "./handler2526";
const app = express()
app.get('/2526', handler2526)
app.listen(3000, () => {})
        