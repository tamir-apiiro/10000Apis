
const express = require('express')
import {handler28} from "./handler28";
const app = express()
app.get('/28', handler28)
app.listen(3000, () => {})
        