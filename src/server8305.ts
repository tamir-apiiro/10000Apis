
const express = require('express')
import {handler8305} from "./handler8305";
const app = express()
app.get('/8305', handler8305)
app.listen(3000, () => {})
        