
const express = require('express')
import {handler2599} from "./handler2599";
const app = express()
app.get('/2599', handler2599)
app.listen(3000, () => {})
        