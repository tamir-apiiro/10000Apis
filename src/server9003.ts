
const express = require('express')
import {handler9003} from "./handler9003";
const app = express()
app.get('/9003', handler9003)
app.listen(3000, () => {})
        