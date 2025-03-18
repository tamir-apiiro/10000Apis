
const express = require('express')
import {handler2370} from "./handler2370";
const app = express()
app.get('/2370', handler2370)
app.listen(3000, () => {})
        