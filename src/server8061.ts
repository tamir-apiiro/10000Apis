
const express = require('express')
import {handler8061} from "./handler8061";
const app = express()
app.get('/8061', handler8061)
app.listen(3000, () => {})
        