
const express = require('express')
import {handler818} from "./handler818";
const app = express()
app.get('/818', handler818)
app.listen(3000, () => {})
        