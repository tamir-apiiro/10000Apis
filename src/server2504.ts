
const express = require('express')
import {handler2504} from "./handler2504";
const app = express()
app.get('/2504', handler2504)
app.listen(3000, () => {})
        