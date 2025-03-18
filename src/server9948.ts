
const express = require('express')
import {handler9948} from "./handler9948";
const app = express()
app.get('/9948', handler9948)
app.listen(3000, () => {})
        