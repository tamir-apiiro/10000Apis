
const express = require('express')
import {handler9860} from "./handler9860";
const app = express()
app.get('/9860', handler9860)
app.listen(3000, () => {})
        