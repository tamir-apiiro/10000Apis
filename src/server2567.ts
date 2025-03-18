
const express = require('express')
import {handler2567} from "./handler2567";
const app = express()
app.get('/2567', handler2567)
app.listen(3000, () => {})
        