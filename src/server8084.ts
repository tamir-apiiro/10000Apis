
const express = require('express')
import {handler8084} from "./handler8084";
const app = express()
app.get('/8084', handler8084)
app.listen(3000, () => {})
        