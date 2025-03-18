
const express = require('express')
import {handler8043} from "./handler8043";
const app = express()
app.get('/8043', handler8043)
app.listen(3000, () => {})
        