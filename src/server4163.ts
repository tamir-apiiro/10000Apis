
const express = require('express')
import {handler4163} from "./handler4163";
const app = express()
app.get('/4163', handler4163)
app.listen(3000, () => {})
        