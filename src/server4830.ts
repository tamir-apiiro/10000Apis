
const express = require('express')
import {handler4830} from "./handler4830";
const app = express()
app.get('/4830', handler4830)
app.listen(3000, () => {})
        