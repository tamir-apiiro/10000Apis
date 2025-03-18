
const express = require('express')
import {handler2650} from "./handler2650";
const app = express()
app.get('/2650', handler2650)
app.listen(3000, () => {})
        