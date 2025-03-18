
const express = require('express')
import {handler603} from "./handler603";
const app = express()
app.get('/603', handler603)
app.listen(3000, () => {})
        