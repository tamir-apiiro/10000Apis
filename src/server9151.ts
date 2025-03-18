
const express = require('express')
import {handler9151} from "./handler9151";
const app = express()
app.get('/9151', handler9151)
app.listen(3000, () => {})
        