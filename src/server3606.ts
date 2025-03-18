
const express = require('express')
import {handler3606} from "./handler3606";
const app = express()
app.get('/3606', handler3606)
app.listen(3000, () => {})
        