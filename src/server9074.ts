
const express = require('express')
import {handler9074} from "./handler9074";
const app = express()
app.get('/9074', handler9074)
app.listen(3000, () => {})
        