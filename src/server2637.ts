
const express = require('express')
import {handler2637} from "./handler2637";
const app = express()
app.get('/2637', handler2637)
app.listen(3000, () => {})
        