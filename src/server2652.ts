
const express = require('express')
import {handler2652} from "./handler2652";
const app = express()
app.get('/2652', handler2652)
app.listen(3000, () => {})
        