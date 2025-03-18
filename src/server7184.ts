
const express = require('express')
import {handler7184} from "./handler7184";
const app = express()
app.get('/7184', handler7184)
app.listen(3000, () => {})
        