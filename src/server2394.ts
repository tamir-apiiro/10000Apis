
const express = require('express')
import {handler2394} from "./handler2394";
const app = express()
app.get('/2394', handler2394)
app.listen(3000, () => {})
        