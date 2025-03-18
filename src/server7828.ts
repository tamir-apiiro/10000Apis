
const express = require('express')
import {handler7828} from "./handler7828";
const app = express()
app.get('/7828', handler7828)
app.listen(3000, () => {})
        