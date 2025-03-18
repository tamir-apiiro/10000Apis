
const express = require('express')
import {handler4091} from "./handler4091";
const app = express()
app.get('/4091', handler4091)
app.listen(3000, () => {})
        