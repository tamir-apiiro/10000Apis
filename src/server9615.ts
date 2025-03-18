
const express = require('express')
import {handler9615} from "./handler9615";
const app = express()
app.get('/9615', handler9615)
app.listen(3000, () => {})
        