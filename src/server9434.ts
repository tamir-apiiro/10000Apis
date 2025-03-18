
const express = require('express')
import {handler9434} from "./handler9434";
const app = express()
app.get('/9434', handler9434)
app.listen(3000, () => {})
        