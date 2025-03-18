
const express = require('express')
import {handler9962} from "./handler9962";
const app = express()
app.get('/9962', handler9962)
app.listen(3000, () => {})
        