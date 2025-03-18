
const express = require('express')
import {handler3353} from "./handler3353";
const app = express()
app.get('/3353', handler3353)
app.listen(3000, () => {})
        