
const express = require('express')
import {handler9343} from "./handler9343";
const app = express()
app.get('/9343', handler9343)
app.listen(3000, () => {})
        