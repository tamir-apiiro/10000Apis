
const express = require('express')
import {handler1203} from "./handler1203";
const app = express()
app.get('/1203', handler1203)
app.listen(3000, () => {})
        