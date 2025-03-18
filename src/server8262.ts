
const express = require('express')
import {handler8262} from "./handler8262";
const app = express()
app.get('/8262', handler8262)
app.listen(3000, () => {})
        