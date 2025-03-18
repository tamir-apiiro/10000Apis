
const express = require('express')
import {handler3726} from "./handler3726";
const app = express()
app.get('/3726', handler3726)
app.listen(3000, () => {})
        