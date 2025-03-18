
const express = require('express')
import {handler4606} from "./handler4606";
const app = express()
app.get('/4606', handler4606)
app.listen(3000, () => {})
        