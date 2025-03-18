
const express = require('express')
import {handler9081} from "./handler9081";
const app = express()
app.get('/9081', handler9081)
app.listen(3000, () => {})
        