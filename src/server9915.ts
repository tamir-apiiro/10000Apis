
const express = require('express')
import {handler9915} from "./handler9915";
const app = express()
app.get('/9915', handler9915)
app.listen(3000, () => {})
        