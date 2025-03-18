
const express = require('express')
import {handler8021} from "./handler8021";
const app = express()
app.get('/8021', handler8021)
app.listen(3000, () => {})
        