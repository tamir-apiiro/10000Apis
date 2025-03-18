
const express = require('express')
import {handler4525} from "./handler4525";
const app = express()
app.get('/4525', handler4525)
app.listen(3000, () => {})
        