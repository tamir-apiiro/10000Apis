
const express = require('express')
import {handler9558} from "./handler9558";
const app = express()
app.get('/9558', handler9558)
app.listen(3000, () => {})
        