
const express = require('express')
import {handler8557} from "./handler8557";
const app = express()
app.get('/8557', handler8557)
app.listen(3000, () => {})
        