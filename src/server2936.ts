
const express = require('express')
import {handler2936} from "./handler2936";
const app = express()
app.get('/2936', handler2936)
app.listen(3000, () => {})
        