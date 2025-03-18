
const express = require('express')
import {handler586} from "./handler586";
const app = express()
app.get('/586', handler586)
app.listen(3000, () => {})
        