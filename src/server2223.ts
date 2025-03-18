
const express = require('express')
import {handler2223} from "./handler2223";
const app = express()
app.get('/2223', handler2223)
app.listen(3000, () => {})
        