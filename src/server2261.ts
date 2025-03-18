
const express = require('express')
import {handler2261} from "./handler2261";
const app = express()
app.get('/2261', handler2261)
app.listen(3000, () => {})
        