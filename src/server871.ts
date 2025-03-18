
const express = require('express')
import {handler871} from "./handler871";
const app = express()
app.get('/871', handler871)
app.listen(3000, () => {})
        