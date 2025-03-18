
const express = require('express')
import {handler2285} from "./handler2285";
const app = express()
app.get('/2285', handler2285)
app.listen(3000, () => {})
        