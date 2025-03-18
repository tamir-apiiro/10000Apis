
const express = require('express')
import {handler7506} from "./handler7506";
const app = express()
app.get('/7506', handler7506)
app.listen(3000, () => {})
        