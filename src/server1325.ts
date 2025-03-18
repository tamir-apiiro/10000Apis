
const express = require('express')
import {handler1325} from "./handler1325";
const app = express()
app.get('/1325', handler1325)
app.listen(3000, () => {})
        