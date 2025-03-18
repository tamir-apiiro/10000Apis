
const express = require('express')
import {handler9265} from "./handler9265";
const app = express()
app.get('/9265', handler9265)
app.listen(3000, () => {})
        