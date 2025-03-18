
const express = require('express')
import {handler9711} from "./handler9711";
const app = express()
app.get('/9711', handler9711)
app.listen(3000, () => {})
        