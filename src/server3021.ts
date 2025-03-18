
const express = require('express')
import {handler3021} from "./handler3021";
const app = express()
app.get('/3021', handler3021)
app.listen(3000, () => {})
        