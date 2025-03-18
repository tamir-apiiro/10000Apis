
const express = require('express')
import {handler726} from "./handler726";
const app = express()
app.get('/726', handler726)
app.listen(3000, () => {})
        