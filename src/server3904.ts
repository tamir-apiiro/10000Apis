
const express = require('express')
import {handler3904} from "./handler3904";
const app = express()
app.get('/3904', handler3904)
app.listen(3000, () => {})
        