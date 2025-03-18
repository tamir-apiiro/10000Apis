
const express = require('express')
import {handler9192} from "./handler9192";
const app = express()
app.get('/9192', handler9192)
app.listen(3000, () => {})
        