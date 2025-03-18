
const express = require('express')
import {handler168} from "./handler168";
const app = express()
app.get('/168', handler168)
app.listen(3000, () => {})
        