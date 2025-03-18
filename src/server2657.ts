
const express = require('express')
import {handler2657} from "./handler2657";
const app = express()
app.get('/2657', handler2657)
app.listen(3000, () => {})
        