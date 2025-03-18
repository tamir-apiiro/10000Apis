
const express = require('express')
import {handler4656} from "./handler4656";
const app = express()
app.get('/4656', handler4656)
app.listen(3000, () => {})
        