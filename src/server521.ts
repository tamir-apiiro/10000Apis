
const express = require('express')
import {handler521} from "./handler521";
const app = express()
app.get('/521', handler521)
app.listen(3000, () => {})
        