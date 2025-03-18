
const express = require('express')
import {handler9739} from "./handler9739";
const app = express()
app.get('/9739', handler9739)
app.listen(3000, () => {})
        