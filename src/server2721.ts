
const express = require('express')
import {handler2721} from "./handler2721";
const app = express()
app.get('/2721', handler2721)
app.listen(3000, () => {})
        