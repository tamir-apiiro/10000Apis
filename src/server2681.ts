
const express = require('express')
import {handler2681} from "./handler2681";
const app = express()
app.get('/2681', handler2681)
app.listen(3000, () => {})
        