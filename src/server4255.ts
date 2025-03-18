
const express = require('express')
import {handler4255} from "./handler4255";
const app = express()
app.get('/4255', handler4255)
app.listen(3000, () => {})
        