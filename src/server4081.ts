
const express = require('express')
import {handler4081} from "./handler4081";
const app = express()
app.get('/4081', handler4081)
app.listen(3000, () => {})
        