
const express = require('express')
import {handler7505} from "./handler7505";
const app = express()
app.get('/7505', handler7505)
app.listen(3000, () => {})
        