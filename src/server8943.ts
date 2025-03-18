
const express = require('express')
import {handler8943} from "./handler8943";
const app = express()
app.get('/8943', handler8943)
app.listen(3000, () => {})
        