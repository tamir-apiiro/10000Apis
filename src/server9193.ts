
const express = require('express')
import {handler9193} from "./handler9193";
const app = express()
app.get('/9193', handler9193)
app.listen(3000, () => {})
        