
const express = require('express')
import {handler4482} from "./handler4482";
const app = express()
app.get('/4482', handler4482)
app.listen(3000, () => {})
        