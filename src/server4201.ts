
const express = require('express')
import {handler4201} from "./handler4201";
const app = express()
app.get('/4201', handler4201)
app.listen(3000, () => {})
        