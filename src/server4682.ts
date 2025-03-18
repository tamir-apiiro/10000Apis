
const express = require('express')
import {handler4682} from "./handler4682";
const app = express()
app.get('/4682', handler4682)
app.listen(3000, () => {})
        