
const express = require('express')
import {handler4620} from "./handler4620";
const app = express()
app.get('/4620', handler4620)
app.listen(3000, () => {})
        