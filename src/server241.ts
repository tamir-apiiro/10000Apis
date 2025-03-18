
const express = require('express')
import {handler241} from "./handler241";
const app = express()
app.get('/241', handler241)
app.listen(3000, () => {})
        