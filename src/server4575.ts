
const express = require('express')
import {handler4575} from "./handler4575";
const app = express()
app.get('/4575', handler4575)
app.listen(3000, () => {})
        