
const express = require('express')
import {handler2021} from "./handler2021";
const app = express()
app.get('/2021', handler2021)
app.listen(3000, () => {})
        