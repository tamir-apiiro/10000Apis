
const express = require('express')
import {handler9073} from "./handler9073";
const app = express()
app.get('/9073', handler9073)
app.listen(3000, () => {})
        