
const express = require('express')
import {handler3603} from "./handler3603";
const app = express()
app.get('/3603', handler3603)
app.listen(3000, () => {})
        