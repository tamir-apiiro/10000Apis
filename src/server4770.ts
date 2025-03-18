
const express = require('express')
import {handler4770} from "./handler4770";
const app = express()
app.get('/4770', handler4770)
app.listen(3000, () => {})
        