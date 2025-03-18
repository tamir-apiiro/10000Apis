
const express = require('express')
import {handler9566} from "./handler9566";
const app = express()
app.get('/9566', handler9566)
app.listen(3000, () => {})
        