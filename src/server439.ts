
const express = require('express')
import {handler439} from "./handler439";
const app = express()
app.get('/439', handler439)
app.listen(3000, () => {})
        