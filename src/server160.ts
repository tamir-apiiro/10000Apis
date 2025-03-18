
const express = require('express')
import {handler160} from "./handler160";
const app = express()
app.get('/160', handler160)
app.listen(3000, () => {})
        