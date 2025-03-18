
const express = require('express')
import {handler9507} from "./handler9507";
const app = express()
app.get('/9507', handler9507)
app.listen(3000, () => {})
        