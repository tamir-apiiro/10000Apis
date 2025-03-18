
const express = require('express')
import {handler4577} from "./handler4577";
const app = express()
app.get('/4577', handler4577)
app.listen(3000, () => {})
        