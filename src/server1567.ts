
const express = require('express')
import {handler1567} from "./handler1567";
const app = express()
app.get('/1567', handler1567)
app.listen(3000, () => {})
        