
const express = require('express')
import {handler4936} from "./handler4936";
const app = express()
app.get('/4936', handler4936)
app.listen(3000, () => {})
        