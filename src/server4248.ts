
const express = require('express')
import {handler4248} from "./handler4248";
const app = express()
app.get('/4248', handler4248)
app.listen(3000, () => {})
        