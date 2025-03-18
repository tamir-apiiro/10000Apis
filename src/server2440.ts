
const express = require('express')
import {handler2440} from "./handler2440";
const app = express()
app.get('/2440', handler2440)
app.listen(3000, () => {})
        