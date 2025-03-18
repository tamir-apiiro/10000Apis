
const express = require('express')
import {handler4550} from "./handler4550";
const app = express()
app.get('/4550', handler4550)
app.listen(3000, () => {})
        