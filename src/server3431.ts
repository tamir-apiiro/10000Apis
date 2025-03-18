
const express = require('express')
import {handler3431} from "./handler3431";
const app = express()
app.get('/3431', handler3431)
app.listen(3000, () => {})
        