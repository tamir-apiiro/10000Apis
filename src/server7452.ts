
const express = require('express')
import {handler7452} from "./handler7452";
const app = express()
app.get('/7452', handler7452)
app.listen(3000, () => {})
        