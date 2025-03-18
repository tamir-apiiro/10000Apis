
const express = require('express')
import {handler7061} from "./handler7061";
const app = express()
app.get('/7061', handler7061)
app.listen(3000, () => {})
        