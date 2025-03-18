
const express = require('express')
import {handler2224} from "./handler2224";
const app = express()
app.get('/2224', handler2224)
app.listen(3000, () => {})
        