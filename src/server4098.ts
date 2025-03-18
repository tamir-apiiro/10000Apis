
const express = require('express')
import {handler4098} from "./handler4098";
const app = express()
app.get('/4098', handler4098)
app.listen(3000, () => {})
        