
const express = require('express')
import {handler7731} from "./handler7731";
const app = express()
app.get('/7731', handler7731)
app.listen(3000, () => {})
        