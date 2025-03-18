
const express = require('express')
import {handler3360} from "./handler3360";
const app = express()
app.get('/3360', handler3360)
app.listen(3000, () => {})
        