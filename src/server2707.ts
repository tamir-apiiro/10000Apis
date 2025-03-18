
const express = require('express')
import {handler2707} from "./handler2707";
const app = express()
app.get('/2707', handler2707)
app.listen(3000, () => {})
        