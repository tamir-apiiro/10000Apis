
const express = require('express')
import {handler4938} from "./handler4938";
const app = express()
app.get('/4938', handler4938)
app.listen(3000, () => {})
        