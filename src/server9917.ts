
const express = require('express')
import {handler9917} from "./handler9917";
const app = express()
app.get('/9917', handler9917)
app.listen(3000, () => {})
        