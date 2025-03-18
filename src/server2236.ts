
const express = require('express')
import {handler2236} from "./handler2236";
const app = express()
app.get('/2236', handler2236)
app.listen(3000, () => {})
        