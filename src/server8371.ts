
const express = require('express')
import {handler8371} from "./handler8371";
const app = express()
app.get('/8371', handler8371)
app.listen(3000, () => {})
        