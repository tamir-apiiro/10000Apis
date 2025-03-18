
const express = require('express')
import {handler986} from "./handler986";
const app = express()
app.get('/986', handler986)
app.listen(3000, () => {})
        