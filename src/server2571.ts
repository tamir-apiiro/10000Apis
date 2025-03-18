
const express = require('express')
import {handler2571} from "./handler2571";
const app = express()
app.get('/2571', handler2571)
app.listen(3000, () => {})
        