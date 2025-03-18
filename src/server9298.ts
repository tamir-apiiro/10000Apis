
const express = require('express')
import {handler9298} from "./handler9298";
const app = express()
app.get('/9298', handler9298)
app.listen(3000, () => {})
        