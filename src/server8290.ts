
const express = require('express')
import {handler8290} from "./handler8290";
const app = express()
app.get('/8290', handler8290)
app.listen(3000, () => {})
        