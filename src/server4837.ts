
const express = require('express')
import {handler4837} from "./handler4837";
const app = express()
app.get('/4837', handler4837)
app.listen(3000, () => {})
        