
const express = require('express')
import {handler2739} from "./handler2739";
const app = express()
app.get('/2739', handler2739)
app.listen(3000, () => {})
        