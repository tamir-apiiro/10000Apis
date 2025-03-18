
const express = require('express')
import {handler9380} from "./handler9380";
const app = express()
app.get('/9380', handler9380)
app.listen(3000, () => {})
        