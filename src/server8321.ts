
const express = require('express')
import {handler8321} from "./handler8321";
const app = express()
app.get('/8321', handler8321)
app.listen(3000, () => {})
        