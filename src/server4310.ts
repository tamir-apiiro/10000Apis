
const express = require('express')
import {handler4310} from "./handler4310";
const app = express()
app.get('/4310', handler4310)
app.listen(3000, () => {})
        