
const express = require('express')
import {handler4490} from "./handler4490";
const app = express()
app.get('/4490', handler4490)
app.listen(3000, () => {})
        