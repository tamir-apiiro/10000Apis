
const express = require('express')
import {handler2577} from "./handler2577";
const app = express()
app.get('/2577', handler2577)
app.listen(3000, () => {})
        