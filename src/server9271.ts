
const express = require('express')
import {handler9271} from "./handler9271";
const app = express()
app.get('/9271', handler9271)
app.listen(3000, () => {})
        