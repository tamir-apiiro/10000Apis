
const express = require('express')
import {handler3544} from "./handler3544";
const app = express()
app.get('/3544', handler3544)
app.listen(3000, () => {})
        