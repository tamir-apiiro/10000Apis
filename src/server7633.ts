
const express = require('express')
import {handler7633} from "./handler7633";
const app = express()
app.get('/7633', handler7633)
app.listen(3000, () => {})
        