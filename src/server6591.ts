
const express = require('express')
import {handler6591} from "./handler6591";
const app = express()
app.get('/6591', handler6591)
app.listen(3000, () => {})
        