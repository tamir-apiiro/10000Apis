
const express = require('express')
import {handler4112} from "./handler4112";
const app = express()
app.get('/4112', handler4112)
app.listen(3000, () => {})
        