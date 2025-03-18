
const express = require('express')
import {handler5985} from "./handler5985";
const app = express()
app.get('/5985', handler5985)
app.listen(3000, () => {})
        