
const express = require('express')
import {handler9996} from "./handler9996";
const app = express()
app.get('/9996', handler9996)
app.listen(3000, () => {})
        