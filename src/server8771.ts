
const express = require('express')
import {handler8771} from "./handler8771";
const app = express()
app.get('/8771', handler8771)
app.listen(3000, () => {})
        