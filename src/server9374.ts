
const express = require('express')
import {handler9374} from "./handler9374";
const app = express()
app.get('/9374', handler9374)
app.listen(3000, () => {})
        