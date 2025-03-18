
const express = require('express')
import {handler1644} from "./handler1644";
const app = express()
app.get('/1644', handler1644)
app.listen(3000, () => {})
        