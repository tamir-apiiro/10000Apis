
const express = require('express')
import {handler2357} from "./handler2357";
const app = express()
app.get('/2357', handler2357)
app.listen(3000, () => {})
        