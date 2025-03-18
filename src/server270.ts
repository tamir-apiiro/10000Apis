
const express = require('express')
import {handler270} from "./handler270";
const app = express()
app.get('/270', handler270)
app.listen(3000, () => {})
        