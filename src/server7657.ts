
const express = require('express')
import {handler7657} from "./handler7657";
const app = express()
app.get('/7657', handler7657)
app.listen(3000, () => {})
        