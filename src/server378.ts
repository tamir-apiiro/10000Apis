
const express = require('express')
import {handler378} from "./handler378";
const app = express()
app.get('/378', handler378)
app.listen(3000, () => {})
        