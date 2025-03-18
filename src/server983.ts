
const express = require('express')
import {handler983} from "./handler983";
const app = express()
app.get('/983', handler983)
app.listen(3000, () => {})
        