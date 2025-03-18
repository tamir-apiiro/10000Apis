
const express = require('express')
import {handler231} from "./handler231";
const app = express()
app.get('/231', handler231)
app.listen(3000, () => {})
        