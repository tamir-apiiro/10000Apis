
const express = require('express')
import {handler9106} from "./handler9106";
const app = express()
app.get('/9106', handler9106)
app.listen(3000, () => {})
        