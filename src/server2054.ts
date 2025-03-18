
const express = require('express')
import {handler2054} from "./handler2054";
const app = express()
app.get('/2054', handler2054)
app.listen(3000, () => {})
        