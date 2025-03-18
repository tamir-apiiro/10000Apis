
const express = require('express')
import {handler8355} from "./handler8355";
const app = express()
app.get('/8355', handler8355)
app.listen(3000, () => {})
        