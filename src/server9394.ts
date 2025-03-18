
const express = require('express')
import {handler9394} from "./handler9394";
const app = express()
app.get('/9394', handler9394)
app.listen(3000, () => {})
        