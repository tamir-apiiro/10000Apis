
const express = require('express')
import {handler4731} from "./handler4731";
const app = express()
app.get('/4731', handler4731)
app.listen(3000, () => {})
        