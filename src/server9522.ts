
const express = require('express')
import {handler9522} from "./handler9522";
const app = express()
app.get('/9522', handler9522)
app.listen(3000, () => {})
        