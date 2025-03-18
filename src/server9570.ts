
const express = require('express')
import {handler9570} from "./handler9570";
const app = express()
app.get('/9570', handler9570)
app.listen(3000, () => {})
        