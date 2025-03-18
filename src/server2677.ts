
const express = require('express')
import {handler2677} from "./handler2677";
const app = express()
app.get('/2677', handler2677)
app.listen(3000, () => {})
        