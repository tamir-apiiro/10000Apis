
const express = require('express')
import {handler904} from "./handler904";
const app = express()
app.get('/904', handler904)
app.listen(3000, () => {})
        