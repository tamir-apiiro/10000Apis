
const express = require('express')
import {handler533} from "./handler533";
const app = express()
app.get('/533', handler533)
app.listen(3000, () => {})
        