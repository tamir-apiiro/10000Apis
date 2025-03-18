
const express = require('express')
import {handler9130} from "./handler9130";
const app = express()
app.get('/9130', handler9130)
app.listen(3000, () => {})
        