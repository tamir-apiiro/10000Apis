
const express = require('express')
import {handler3986} from "./handler3986";
const app = express()
app.get('/3986', handler3986)
app.listen(3000, () => {})
        