
const express = require('express')
import {handler7021} from "./handler7021";
const app = express()
app.get('/7021', handler7021)
app.listen(3000, () => {})
        