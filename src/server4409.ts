
const express = require('express')
import {handler4409} from "./handler4409";
const app = express()
app.get('/4409', handler4409)
app.listen(3000, () => {})
        