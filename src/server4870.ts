
const express = require('express')
import {handler4870} from "./handler4870";
const app = express()
app.get('/4870', handler4870)
app.listen(3000, () => {})
        