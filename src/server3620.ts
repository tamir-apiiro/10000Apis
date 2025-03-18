
const express = require('express')
import {handler3620} from "./handler3620";
const app = express()
app.get('/3620', handler3620)
app.listen(3000, () => {})
        