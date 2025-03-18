
const express = require('express')
import {handler2447} from "./handler2447";
const app = express()
app.get('/2447', handler2447)
app.listen(3000, () => {})
        