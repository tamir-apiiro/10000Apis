
const express = require('express')
import {handler1577} from "./handler1577";
const app = express()
app.get('/1577', handler1577)
app.listen(3000, () => {})
        