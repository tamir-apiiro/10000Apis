
const express = require('express')
import {handler9631} from "./handler9631";
const app = express()
app.get('/9631', handler9631)
app.listen(3000, () => {})
        