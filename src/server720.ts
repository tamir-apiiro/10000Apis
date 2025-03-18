
const express = require('express')
import {handler720} from "./handler720";
const app = express()
app.get('/720', handler720)
app.listen(3000, () => {})
        