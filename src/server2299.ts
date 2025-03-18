
const express = require('express')
import {handler2299} from "./handler2299";
const app = express()
app.get('/2299', handler2299)
app.listen(3000, () => {})
        