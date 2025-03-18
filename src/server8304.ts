
const express = require('express')
import {handler8304} from "./handler8304";
const app = express()
app.get('/8304', handler8304)
app.listen(3000, () => {})
        