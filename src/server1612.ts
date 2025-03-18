
const express = require('express')
import {handler1612} from "./handler1612";
const app = express()
app.get('/1612', handler1612)
app.listen(3000, () => {})
        