
const express = require('express')
import {handler255} from "./handler255";
const app = express()
app.get('/255', handler255)
app.listen(3000, () => {})
        