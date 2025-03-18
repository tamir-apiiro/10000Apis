
const express = require('express')
import {handler9362} from "./handler9362";
const app = express()
app.get('/9362', handler9362)
app.listen(3000, () => {})
        