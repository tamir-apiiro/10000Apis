
const express = require('express')
import {handler7479} from "./handler7479";
const app = express()
app.get('/7479', handler7479)
app.listen(3000, () => {})
        