
const express = require('express')
import {handler8816} from "./handler8816";
const app = express()
app.get('/8816', handler8816)
app.listen(3000, () => {})
        