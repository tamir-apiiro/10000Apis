
const express = require('express')
import {handler3612} from "./handler3612";
const app = express()
app.get('/3612', handler3612)
app.listen(3000, () => {})
        