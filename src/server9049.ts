
const express = require('express')
import {handler9049} from "./handler9049";
const app = express()
app.get('/9049', handler9049)
app.listen(3000, () => {})
        