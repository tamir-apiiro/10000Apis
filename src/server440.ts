
const express = require('express')
import {handler440} from "./handler440";
const app = express()
app.get('/440', handler440)
app.listen(3000, () => {})
        