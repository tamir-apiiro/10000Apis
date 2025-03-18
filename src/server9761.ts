
const express = require('express')
import {handler9761} from "./handler9761";
const app = express()
app.get('/9761', handler9761)
app.listen(3000, () => {})
        