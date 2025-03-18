
const express = require('express')
import {handler9791} from "./handler9791";
const app = express()
app.get('/9791', handler9791)
app.listen(3000, () => {})
        