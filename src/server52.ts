
const express = require('express')
import {handler52} from "./handler52";
const app = express()
app.get('/52', handler52)
app.listen(3000, () => {})
        