
const express = require('express')
import {handler633} from "./handler633";
const app = express()
app.get('/633', handler633)
app.listen(3000, () => {})
        