
const express = require('express')
import {handler2177} from "./handler2177";
const app = express()
app.get('/2177', handler2177)
app.listen(3000, () => {})
        