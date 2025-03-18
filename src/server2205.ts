
const express = require('express')
import {handler2205} from "./handler2205";
const app = express()
app.get('/2205', handler2205)
app.listen(3000, () => {})
        