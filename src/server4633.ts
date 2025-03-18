
const express = require('express')
import {handler4633} from "./handler4633";
const app = express()
app.get('/4633', handler4633)
app.listen(3000, () => {})
        