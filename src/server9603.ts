
const express = require('express')
import {handler9603} from "./handler9603";
const app = express()
app.get('/9603', handler9603)
app.listen(3000, () => {})
        