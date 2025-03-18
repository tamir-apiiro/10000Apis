
const express = require('express')
import {handler4213} from "./handler4213";
const app = express()
app.get('/4213', handler4213)
app.listen(3000, () => {})
        