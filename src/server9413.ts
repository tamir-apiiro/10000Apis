
const express = require('express')
import {handler9413} from "./handler9413";
const app = express()
app.get('/9413', handler9413)
app.listen(3000, () => {})
        