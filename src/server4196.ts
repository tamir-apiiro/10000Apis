
const express = require('express')
import {handler4196} from "./handler4196";
const app = express()
app.get('/4196', handler4196)
app.listen(3000, () => {})
        