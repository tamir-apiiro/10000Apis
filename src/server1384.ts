
const express = require('express')
import {handler1384} from "./handler1384";
const app = express()
app.get('/1384', handler1384)
app.listen(3000, () => {})
        