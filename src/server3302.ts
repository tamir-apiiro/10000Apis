
const express = require('express')
import {handler3302} from "./handler3302";
const app = express()
app.get('/3302', handler3302)
app.listen(3000, () => {})
        