
const express = require('express')
import {handler570} from "./handler570";
const app = express()
app.get('/570', handler570)
app.listen(3000, () => {})
        