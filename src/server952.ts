
const express = require('express')
import {handler952} from "./handler952";
const app = express()
app.get('/952', handler952)
app.listen(3000, () => {})
        