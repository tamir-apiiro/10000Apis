
const express = require('express')
import {handler9463} from "./handler9463";
const app = express()
app.get('/9463', handler9463)
app.listen(3000, () => {})
        