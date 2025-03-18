
const express = require('express')
import {handler4384} from "./handler4384";
const app = express()
app.get('/4384', handler4384)
app.listen(3000, () => {})
        