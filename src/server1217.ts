
const express = require('express')
import {handler1217} from "./handler1217";
const app = express()
app.get('/1217', handler1217)
app.listen(3000, () => {})
        