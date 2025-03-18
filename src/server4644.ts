
const express = require('express')
import {handler4644} from "./handler4644";
const app = express()
app.get('/4644', handler4644)
app.listen(3000, () => {})
        