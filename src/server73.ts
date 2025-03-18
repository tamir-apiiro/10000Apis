
const express = require('express')
import {handler73} from "./handler73";
const app = express()
app.get('/73', handler73)
app.listen(3000, () => {})
        