
const express = require('express')
import {handler7726} from "./handler7726";
const app = express()
app.get('/7726', handler7726)
app.listen(3000, () => {})
        