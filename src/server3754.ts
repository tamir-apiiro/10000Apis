
const express = require('express')
import {handler3754} from "./handler3754";
const app = express()
app.get('/3754', handler3754)
app.listen(3000, () => {})
        