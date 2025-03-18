
const express = require('express')
import {handler9979} from "./handler9979";
const app = express()
app.get('/9979', handler9979)
app.listen(3000, () => {})
        