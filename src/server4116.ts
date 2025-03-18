
const express = require('express')
import {handler4116} from "./handler4116";
const app = express()
app.get('/4116', handler4116)
app.listen(3000, () => {})
        