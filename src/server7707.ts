
const express = require('express')
import {handler7707} from "./handler7707";
const app = express()
app.get('/7707', handler7707)
app.listen(3000, () => {})
        