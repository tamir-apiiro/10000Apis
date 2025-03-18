
const express = require('express')
import {handler9701} from "./handler9701";
const app = express()
app.get('/9701', handler9701)
app.listen(3000, () => {})
        