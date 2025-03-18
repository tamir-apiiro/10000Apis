
const express = require('express')
import {handler9903} from "./handler9903";
const app = express()
app.get('/9903', handler9903)
app.listen(3000, () => {})
        