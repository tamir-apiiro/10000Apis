
const express = require('express')
import {handler9955} from "./handler9955";
const app = express()
app.get('/9955', handler9955)
app.listen(3000, () => {})
        