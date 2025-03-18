
const express = require('express')
import {handler2676} from "./handler2676";
const app = express()
app.get('/2676', handler2676)
app.listen(3000, () => {})
        