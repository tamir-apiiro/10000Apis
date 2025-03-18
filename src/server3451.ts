
const express = require('express')
import {handler3451} from "./handler3451";
const app = express()
app.get('/3451', handler3451)
app.listen(3000, () => {})
        