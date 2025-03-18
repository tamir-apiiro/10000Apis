
const express = require('express')
import {handler2327} from "./handler2327";
const app = express()
app.get('/2327', handler2327)
app.listen(3000, () => {})
        