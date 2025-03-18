
const express = require('express')
import {handler706} from "./handler706";
const app = express()
app.get('/706', handler706)
app.listen(3000, () => {})
        