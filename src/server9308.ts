
const express = require('express')
import {handler9308} from "./handler9308";
const app = express()
app.get('/9308', handler9308)
app.listen(3000, () => {})
        