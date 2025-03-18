
const express = require('express')
import {handler9369} from "./handler9369";
const app = express()
app.get('/9369', handler9369)
app.listen(3000, () => {})
        