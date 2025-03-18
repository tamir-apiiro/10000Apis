
const express = require('express')
import {handler684} from "./handler684";
const app = express()
app.get('/684', handler684)
app.listen(3000, () => {})
        