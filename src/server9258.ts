
const express = require('express')
import {handler9258} from "./handler9258";
const app = express()
app.get('/9258', handler9258)
app.listen(3000, () => {})
        