
const express = require('express')
import {handler2904} from "./handler2904";
const app = express()
app.get('/2904', handler2904)
app.listen(3000, () => {})
        