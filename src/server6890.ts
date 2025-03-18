
const express = require('express')
import {handler6890} from "./handler6890";
const app = express()
app.get('/6890', handler6890)
app.listen(3000, () => {})
        