
const express = require('express')
import {handler7555} from "./handler7555";
const app = express()
app.get('/7555', handler7555)
app.listen(3000, () => {})
        