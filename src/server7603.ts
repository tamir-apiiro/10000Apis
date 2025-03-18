
const express = require('express')
import {handler7603} from "./handler7603";
const app = express()
app.get('/7603', handler7603)
app.listen(3000, () => {})
        