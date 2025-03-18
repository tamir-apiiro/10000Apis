
const express = require('express')
import {handler4424} from "./handler4424";
const app = express()
app.get('/4424', handler4424)
app.listen(3000, () => {})
        