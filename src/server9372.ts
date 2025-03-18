
const express = require('express')
import {handler9372} from "./handler9372";
const app = express()
app.get('/9372', handler9372)
app.listen(3000, () => {})
        