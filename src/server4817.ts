
const express = require('express')
import {handler4817} from "./handler4817";
const app = express()
app.get('/4817', handler4817)
app.listen(3000, () => {})
        