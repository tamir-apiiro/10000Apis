
const express = require('express')
import {handler9204} from "./handler9204";
const app = express()
app.get('/9204', handler9204)
app.listen(3000, () => {})
        