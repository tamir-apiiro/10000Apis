
const express = require('express')
import {handler4354} from "./handler4354";
const app = express()
app.get('/4354', handler4354)
app.listen(3000, () => {})
        