
const express = require('express')
import {handler203} from "./handler203";
const app = express()
app.get('/203', handler203)
app.listen(3000, () => {})
        