
const express = require('express')
import {handler4442} from "./handler4442";
const app = express()
app.get('/4442', handler4442)
app.listen(3000, () => {})
        