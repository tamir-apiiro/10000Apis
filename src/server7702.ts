
const express = require('express')
import {handler7702} from "./handler7702";
const app = express()
app.get('/7702', handler7702)
app.listen(3000, () => {})
        