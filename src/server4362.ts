
const express = require('express')
import {handler4362} from "./handler4362";
const app = express()
app.get('/4362', handler4362)
app.listen(3000, () => {})
        