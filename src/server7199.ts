
const express = require('express')
import {handler7199} from "./handler7199";
const app = express()
app.get('/7199', handler7199)
app.listen(3000, () => {})
        