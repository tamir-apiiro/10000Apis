
const express = require('express')
import {handler3258} from "./handler3258";
const app = express()
app.get('/3258', handler3258)
app.listen(3000, () => {})
        