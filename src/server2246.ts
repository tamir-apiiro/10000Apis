
const express = require('express')
import {handler2246} from "./handler2246";
const app = express()
app.get('/2246', handler2246)
app.listen(3000, () => {})
        