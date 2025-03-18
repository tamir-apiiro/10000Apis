
const express = require('express')
import {handler514} from "./handler514";
const app = express()
app.get('/514', handler514)
app.listen(3000, () => {})
        