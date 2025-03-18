
const express = require('express')
import {handler6985} from "./handler6985";
const app = express()
app.get('/6985', handler6985)
app.listen(3000, () => {})
        