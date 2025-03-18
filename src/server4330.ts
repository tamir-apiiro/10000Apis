
const express = require('express')
import {handler4330} from "./handler4330";
const app = express()
app.get('/4330', handler4330)
app.listen(3000, () => {})
        