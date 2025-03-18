
const express = require('express')
import {handler2023} from "./handler2023";
const app = express()
app.get('/2023', handler2023)
app.listen(3000, () => {})
        