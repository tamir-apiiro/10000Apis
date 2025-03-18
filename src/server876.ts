
const express = require('express')
import {handler876} from "./handler876";
const app = express()
app.get('/876', handler876)
app.listen(3000, () => {})
        