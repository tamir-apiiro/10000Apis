
const express = require('express')
import {handler4171} from "./handler4171";
const app = express()
app.get('/4171', handler4171)
app.listen(3000, () => {})
        