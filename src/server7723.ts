
const express = require('express')
import {handler7723} from "./handler7723";
const app = express()
app.get('/7723', handler7723)
app.listen(3000, () => {})
        