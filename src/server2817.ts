
const express = require('express')
import {handler2817} from "./handler2817";
const app = express()
app.get('/2817', handler2817)
app.listen(3000, () => {})
        