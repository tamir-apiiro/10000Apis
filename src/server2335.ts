
const express = require('express')
import {handler2335} from "./handler2335";
const app = express()
app.get('/2335', handler2335)
app.listen(3000, () => {})
        