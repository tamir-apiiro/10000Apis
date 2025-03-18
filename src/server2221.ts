
const express = require('express')
import {handler2221} from "./handler2221";
const app = express()
app.get('/2221', handler2221)
app.listen(3000, () => {})
        