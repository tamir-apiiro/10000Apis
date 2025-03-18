
const express = require('express')
import {handler9607} from "./handler9607";
const app = express()
app.get('/9607', handler9607)
app.listen(3000, () => {})
        