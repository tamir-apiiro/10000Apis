
const express = require('express')
import {handler2801} from "./handler2801";
const app = express()
app.get('/2801', handler2801)
app.listen(3000, () => {})
        