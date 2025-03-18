
const express = require('express')
import {handler1366} from "./handler1366";
const app = express()
app.get('/1366', handler1366)
app.listen(3000, () => {})
        