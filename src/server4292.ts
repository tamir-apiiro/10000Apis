
const express = require('express')
import {handler4292} from "./handler4292";
const app = express()
app.get('/4292', handler4292)
app.listen(3000, () => {})
        