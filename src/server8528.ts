
const express = require('express')
import {handler8528} from "./handler8528";
const app = express()
app.get('/8528', handler8528)
app.listen(3000, () => {})
        