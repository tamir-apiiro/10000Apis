
const express = require('express')
import {handler9337} from "./handler9337";
const app = express()
app.get('/9337', handler9337)
app.listen(3000, () => {})
        