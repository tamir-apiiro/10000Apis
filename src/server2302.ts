
const express = require('express')
import {handler2302} from "./handler2302";
const app = express()
app.get('/2302', handler2302)
app.listen(3000, () => {})
        