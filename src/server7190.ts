
const express = require('express')
import {handler7190} from "./handler7190";
const app = express()
app.get('/7190', handler7190)
app.listen(3000, () => {})
        