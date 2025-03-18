
const express = require('express')
import {handler2190} from "./handler2190";
const app = express()
app.get('/2190', handler2190)
app.listen(3000, () => {})
        