
const express = require('express')
import {handler811} from "./handler811";
const app = express()
app.get('/811', handler811)
app.listen(3000, () => {})
        