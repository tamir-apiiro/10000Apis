
const express = require('express')
import {handler6818} from "./handler6818";
const app = express()
app.get('/6818', handler6818)
app.listen(3000, () => {})
        