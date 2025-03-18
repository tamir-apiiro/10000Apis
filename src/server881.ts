
const express = require('express')
import {handler881} from "./handler881";
const app = express()
app.get('/881', handler881)
app.listen(3000, () => {})
        