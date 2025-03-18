
const express = require('express')
import {handler4789} from "./handler4789";
const app = express()
app.get('/4789', handler4789)
app.listen(3000, () => {})
        