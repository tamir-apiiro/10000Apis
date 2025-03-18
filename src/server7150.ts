
const express = require('express')
import {handler7150} from "./handler7150";
const app = express()
app.get('/7150', handler7150)
app.listen(3000, () => {})
        