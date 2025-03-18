
const express = require('express')
import {handler3081} from "./handler3081";
const app = express()
app.get('/3081', handler3081)
app.listen(3000, () => {})
        