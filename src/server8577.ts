
const express = require('express')
import {handler8577} from "./handler8577";
const app = express()
app.get('/8577', handler8577)
app.listen(3000, () => {})
        