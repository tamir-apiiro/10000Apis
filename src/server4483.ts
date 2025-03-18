
const express = require('express')
import {handler4483} from "./handler4483";
const app = express()
app.get('/4483', handler4483)
app.listen(3000, () => {})
        