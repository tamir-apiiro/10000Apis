
const express = require('express')
import {handler2184} from "./handler2184";
const app = express()
app.get('/2184', handler2184)
app.listen(3000, () => {})
        