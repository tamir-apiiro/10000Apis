
const express = require('express')
import {handler2251} from "./handler2251";
const app = express()
app.get('/2251', handler2251)
app.listen(3000, () => {})
        