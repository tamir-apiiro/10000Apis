
const express = require('express')
import {handler4988} from "./handler4988";
const app = express()
app.get('/4988', handler4988)
app.listen(3000, () => {})
        