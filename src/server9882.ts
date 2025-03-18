
const express = require('express')
import {handler9882} from "./handler9882";
const app = express()
app.get('/9882', handler9882)
app.listen(3000, () => {})
        