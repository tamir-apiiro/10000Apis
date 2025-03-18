
const express = require('express')
import {handler2880} from "./handler2880";
const app = express()
app.get('/2880', handler2880)
app.listen(3000, () => {})
        