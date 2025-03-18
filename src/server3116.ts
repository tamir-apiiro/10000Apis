
const express = require('express')
import {handler3116} from "./handler3116";
const app = express()
app.get('/3116', handler3116)
app.listen(3000, () => {})
        