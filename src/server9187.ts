
const express = require('express')
import {handler9187} from "./handler9187";
const app = express()
app.get('/9187', handler9187)
app.listen(3000, () => {})
        