
const express = require('express')
import {handler2024} from "./handler2024";
const app = express()
app.get('/2024', handler2024)
app.listen(3000, () => {})
        