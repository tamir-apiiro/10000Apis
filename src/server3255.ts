
const express = require('express')
import {handler3255} from "./handler3255";
const app = express()
app.get('/3255', handler3255)
app.listen(3000, () => {})
        