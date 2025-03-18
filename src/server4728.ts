
const express = require('express')
import {handler4728} from "./handler4728";
const app = express()
app.get('/4728', handler4728)
app.listen(3000, () => {})
        