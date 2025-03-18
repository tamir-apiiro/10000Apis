
const express = require('express')
import {handler268} from "./handler268";
const app = express()
app.get('/268', handler268)
app.listen(3000, () => {})
        