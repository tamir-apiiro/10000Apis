
const express = require('express')
import {handler4233} from "./handler4233";
const app = express()
app.get('/4233', handler4233)
app.listen(3000, () => {})
        