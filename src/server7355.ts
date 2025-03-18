
const express = require('express')
import {handler7355} from "./handler7355";
const app = express()
app.get('/7355', handler7355)
app.listen(3000, () => {})
        