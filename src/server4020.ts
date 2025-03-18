
const express = require('express')
import {handler4020} from "./handler4020";
const app = express()
app.get('/4020', handler4020)
app.listen(3000, () => {})
        