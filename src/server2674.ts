
const express = require('express')
import {handler2674} from "./handler2674";
const app = express()
app.get('/2674', handler2674)
app.listen(3000, () => {})
        