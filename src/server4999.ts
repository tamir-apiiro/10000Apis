
const express = require('express')
import {handler4999} from "./handler4999";
const app = express()
app.get('/4999', handler4999)
app.listen(3000, () => {})
        