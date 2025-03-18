
const express = require('express')
import {handler637} from "./handler637";
const app = express()
app.get('/637', handler637)
app.listen(3000, () => {})
        