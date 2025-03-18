
const express = require('express')
import {handler9500} from "./handler9500";
const app = express()
app.get('/9500', handler9500)
app.listen(3000, () => {})
        