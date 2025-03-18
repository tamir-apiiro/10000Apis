
const express = require('express')
import {handler3465} from "./handler3465";
const app = express()
app.get('/3465', handler3465)
app.listen(3000, () => {})
        