
const express = require('express')
import {handler2756} from "./handler2756";
const app = express()
app.get('/2756', handler2756)
app.listen(3000, () => {})
        