
const express = require('express')
import {handler9097} from "./handler9097";
const app = express()
app.get('/9097', handler9097)
app.listen(3000, () => {})
        