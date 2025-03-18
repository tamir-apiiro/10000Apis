
const express = require('express')
import {handler8839} from "./handler8839";
const app = express()
app.get('/8839', handler8839)
app.listen(3000, () => {})
        