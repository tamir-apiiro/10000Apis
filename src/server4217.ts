
const express = require('express')
import {handler4217} from "./handler4217";
const app = express()
app.get('/4217', handler4217)
app.listen(3000, () => {})
        