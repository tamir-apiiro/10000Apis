
const express = require('express')
import {handler9078} from "./handler9078";
const app = express()
app.get('/9078', handler9078)
app.listen(3000, () => {})
        