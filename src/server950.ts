
const express = require('express')
import {handler950} from "./handler950";
const app = express()
app.get('/950', handler950)
app.listen(3000, () => {})
        