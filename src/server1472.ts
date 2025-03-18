
const express = require('express')
import {handler1472} from "./handler1472";
const app = express()
app.get('/1472', handler1472)
app.listen(3000, () => {})
        