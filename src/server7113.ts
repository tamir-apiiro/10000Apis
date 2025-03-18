
const express = require('express')
import {handler7113} from "./handler7113";
const app = express()
app.get('/7113', handler7113)
app.listen(3000, () => {})
        