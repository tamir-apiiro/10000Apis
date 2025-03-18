
const express = require('express')
import {handler754} from "./handler754";
const app = express()
app.get('/754', handler754)
app.listen(3000, () => {})
        