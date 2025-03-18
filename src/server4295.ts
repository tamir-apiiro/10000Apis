
const express = require('express')
import {handler4295} from "./handler4295";
const app = express()
app.get('/4295', handler4295)
app.listen(3000, () => {})
        