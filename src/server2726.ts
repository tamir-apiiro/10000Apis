
const express = require('express')
import {handler2726} from "./handler2726";
const app = express()
app.get('/2726', handler2726)
app.listen(3000, () => {})
        