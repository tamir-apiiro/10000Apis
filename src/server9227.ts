
const express = require('express')
import {handler9227} from "./handler9227";
const app = express()
app.get('/9227', handler9227)
app.listen(3000, () => {})
        