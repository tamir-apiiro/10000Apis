
const express = require('express')
import {handler2514} from "./handler2514";
const app = express()
app.get('/2514', handler2514)
app.listen(3000, () => {})
        