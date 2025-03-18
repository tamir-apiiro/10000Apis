
const express = require('express')
import {handler4092} from "./handler4092";
const app = express()
app.get('/4092', handler4092)
app.listen(3000, () => {})
        