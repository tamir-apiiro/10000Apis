
const express = require('express')
import {handler2355} from "./handler2355";
const app = express()
app.get('/2355', handler2355)
app.listen(3000, () => {})
        