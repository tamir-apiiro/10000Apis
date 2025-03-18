
const express = require('express')
import {handler9836} from "./handler9836";
const app = express()
app.get('/9836', handler9836)
app.listen(3000, () => {})
        