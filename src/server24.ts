
const express = require('express')
import {handler24} from "./handler24";
const app = express()
app.get('/24', handler24)
app.listen(3000, () => {})
        