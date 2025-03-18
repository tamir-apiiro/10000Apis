
const express = require('express')
import {handler7612} from "./handler7612";
const app = express()
app.get('/7612', handler7612)
app.listen(3000, () => {})
        