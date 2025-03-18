
const express = require('express')
import {handler9016} from "./handler9016";
const app = express()
app.get('/9016', handler9016)
app.listen(3000, () => {})
        