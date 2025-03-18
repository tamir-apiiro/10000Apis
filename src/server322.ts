
const express = require('express')
import {handler322} from "./handler322";
const app = express()
app.get('/322', handler322)
app.listen(3000, () => {})
        