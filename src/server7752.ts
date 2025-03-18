
const express = require('express')
import {handler7752} from "./handler7752";
const app = express()
app.get('/7752', handler7752)
app.listen(3000, () => {})
        