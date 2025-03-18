
const express = require('express')
import {handler9551} from "./handler9551";
const app = express()
app.get('/9551', handler9551)
app.listen(3000, () => {})
        