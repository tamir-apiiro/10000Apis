
const express = require('express')
import {handler9332} from "./handler9332";
const app = express()
app.get('/9332', handler9332)
app.listen(3000, () => {})
        