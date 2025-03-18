
const express = require('express')
import {handler4250} from "./handler4250";
const app = express()
app.get('/4250', handler4250)
app.listen(3000, () => {})
        