
const express = require('express')
import {handler7125} from "./handler7125";
const app = express()
app.get('/7125', handler7125)
app.listen(3000, () => {})
        